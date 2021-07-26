import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { cookiesKey } from './constans';
import { CurrentUser } from './decorators/user.decorator';
import { RefreshTokenResponse } from '@portfolio/shared-types';
import { UserAuthResponse } from '@portfolio/shared-types';
import { UserRegisterDto } from '@portfolio/shared-types';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @Body() credentials: UserRegisterDto,
    @Res({ passthrough: true }) res: Response,
    @Req() req: any
  ): Promise<any> {
    const { email, password } = credentials;
    const user = await this.authService.validateUser(email, password);
    if (user) {
      const accessToken = await this.authService.generateAccessToken(user);
      const refreshToken = await this.authService.generateRefreshToken(
        user,
        20
      );
      const loginUserResponse = new UserAuthResponse();
      loginUserResponse.user = {
        id: user.id,
        email: user.email,
      };
      loginUserResponse.accessToken = accessToken;
      loginUserResponse.refreshToken = refreshToken;
      res.cookie(cookiesKey.refreshToken, refreshToken, {
        httpOnly: true,
        sameSite: 'strict',
        path: '/auth/refresh-token',
      });
      return loginUserResponse;
    }
  }

  @Post('register')
  async register(
    @Res({ passthrough: true }) res: Response,
    @Body() { email, password }: UserRegisterDto
  ): Promise<UserAuthResponse> {
    const user = await this.authService.register(email, password);
    if (!user)
      throw new HttpException('User already exists!', HttpStatus.BAD_REQUEST);
    const accessToken = await this.authService.generateAccessToken(user);
    const refreshToken = await this.authService.generateRefreshToken(
      user,
      60 * 60 * 24 * 30
    );
    const registerUserResponse = new UserAuthResponse();
    registerUserResponse.user = {
      id: user.id,
      email: user.email,
    };
    res.cookie(cookiesKey.refreshToken, refreshToken, {
      httpOnly: true,
      sameSite: 'strict',
      path: '/auth/refresh-token',
    });
    registerUserResponse.accessToken = accessToken;
    registerUserResponse.refreshToken = refreshToken;
    return registerUserResponse;
  }

  @Post('refresh-token')
  async refresh(
    // @Body() { refreshToken }: { refreshToken: string },
    @Req() req: Request
  ): Promise<RefreshTokenResponse> {
    const refreshToken = req.cookies['jid'];
    const { user, token } =
      await this.authService.createAccessTokenFromRefreshToken(refreshToken);

    const refreshTokenResponse = new RefreshTokenResponse();
    refreshTokenResponse.user = { email: user.email, id: user.id };
    refreshTokenResponse.accessToken = token;
    return refreshTokenResponse;
  }
  @Post('logout')
  async logout(@Res({ passthrough: true }) res: Response) {
    res.cookie(cookiesKey.refreshToken, '', {
      httpOnly: true,
      sameSite: 'strict',
      path: '/auth/refresh-token',
    });
  }
  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getLogedInUser(@CurrentUser() user: User) {
    const { id } = user;
    return await this.authService.getCurrentUser(id);
  }
}
