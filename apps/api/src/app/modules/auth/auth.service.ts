import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { TokenExpiredError } from 'jsonwebtoken';
import { UserService } from '../user/user.service';
import { jwtConstants } from './constans';
import * as argon2 from 'argon2';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private usersService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.usersService.findUser({ email });
    if (user) {
      const isPasswordValid = await argon2.verify(user.password, password);
      if (isPasswordValid) {
        return user;
      }
    }
    return null;
  }

  async register(email: string, password: string): Promise<User | null> {
    const oldUser = await this.usersService.findUser({ email });
    if (oldUser) return null;
    const hashedPassword = await argon2.hash(password);
    const user = await this.usersService.createUser({
      email,
      password: hashedPassword,
    });
    return user;
  }

  async generateAccessToken(user: Pick<User, 'email' | 'id'>) {
    const payload = { email: user.email, sub: user.id };
    return await this.jwtService.signAsync(payload);
  }

  async generateRefreshToken(
    user: Pick<User, 'id' | 'email'>,
    expiresIn: number
  ): Promise<string> {
    const payload = {
      email: user.email,
      sub: user.id,
    };
    return await this.jwtService.signAsync(payload, {
      secret: jwtConstants.refreshTokenSecret,
      expiresIn: expiresIn,
    });
  }

  async resolveRefreshToken(refreshToken: string): Promise<{
    user: Pick<User, 'id' | 'email'>;
  }> {
    try {
      const payload = await this.jwtService.verify(refreshToken, {
        secret: jwtConstants.refreshTokenSecret,
      });
      if (!payload.sub) {
        throw new UnprocessableEntityException('Refresh token malformed');
      }

      const user = await this.prismaService.user.findUnique({
        where: {
          id: parseInt(payload.sub),
        },
      });

      if (!user) {
        throw new UnprocessableEntityException('Refresh token malformed');
      }

      return { user };
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        throw new UnprocessableEntityException('Refresh token expired');
      } else {
        throw new UnprocessableEntityException('Refresh token malformed');
      }
    }
  }

  async createAccessTokenFromRefreshToken(refresh: string): Promise<{
    user: Pick<User, 'id' | 'email'>;
    token: string;
  }> {
    const { user } = await this.resolveRefreshToken(refresh);
    const token = await this.generateAccessToken(user);
    return { user, token };
  }
  async getCurrentUser(id: number): Promise<User> {
    return await this.usersService.findUser({ id });
  }
}
