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
import { cookiesKey, jwtConstants } from './constans';
import { CurrentUser } from './decorators/user.decorator';
import { RefreshTokenResponse } from '@portfolio/shared-types';
import { UserAuthResponse } from '@portfolio/shared-types';
import { UserRegisterDto } from '@portfolio/shared-types';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { UserService } from '../user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}

  // @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @Body() credentials: UserRegisterDto,
    @Res({ passthrough: true }) res: Response,
    @Req() req: any
  ): Promise<any> {
    const { email, password } = credentials;
    console.log('triggered', email, password);
    const user = await this.authService.validateUser(email, password);
    if (user) {
      const accessToken = await this.authService.generateAccessToken(user);
      const refreshToken = await this.authService.generateRefreshToken(
        user,
        60 * 60 * 24 * 30
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
        path: '/api/auth/refresh-token',
      });
      console.log(loginUserResponse);
      return loginUserResponse;
    }
  }
  // async login(
  //   @Body() credentials: UserRegisterDto,
  //   @Res({ passthrough: true }) res: Response,
  //   @Req() req: any
  // ): Promise<any> {
  //   const { email, password } = credentials;
  //   console.log('triggered', email, password);
  //   const user = await this.authService.validateUser(email, password);
  //   if (user) {
  //     const accessToken = await this.authService.generateAccessToken(user);
  //     const refreshToken = await this.authService.generateRefreshToken(
  //       user,
  //       60 * 60 * 24 * 30
  //     );
  //     const loginUserResponse = new UserAuthResponse();
  //     loginUserResponse.user = {
  //       id: user.id,
  //       email: user.email,
  //     };
  //     loginUserResponse.accessToken = accessToken;
  //     loginUserResponse.refreshToken = refreshToken;
  //     res.cookie(cookiesKey.refreshToken, refreshToken, {
  //       httpOnly: true,
  //       sameSite: 'strict',
  //       path: '/api/auth/refresh-token',
  //     });
  //     console.log(loginUserResponse);
  //     return loginUserResponse;
  //   }
  // }

  @Post('generateToken')
  async generateToken(@Body('') obj: any) {
    console.log('accessToken');
    const user = await this.userService.findUser({ email: obj.email });
    const accessToken = await this.authService.generateAccessToken(user);
    console.log(accessToken);
    return { accessToken };
  }
  @Post('register')
  async register(
    @Res({ passthrough: true }) res: Response,
    @Body() { email, password }: UserRegisterDto
  ): Promise<any> {
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
      path: '/api/auth/refresh-token',
    });
    registerUserResponse.accessToken = accessToken;
    registerUserResponse.refreshToken = refreshToken;
    const expiresIn: number = jwtConstants.accessTokenExpiresIn;

    return { expiresIn, ...registerUserResponse };
  }

  @Post('refresh-token')
  async refresh(
    @Body() { refreshToken }: { refreshToken: string },
    @Req() req: Request
  ): Promise<any> {
    console.log('cookies', refreshToken);
    // const refreshToken = req.cookies['jid'];
    const { user, token } =
      await this.authService.createAccessTokenFromRefreshToken(refreshToken);
    console.log('1');
    const refreshTokenResponse = new RefreshTokenResponse();
    refreshTokenResponse.user = { email: user.email, id: user.id };
    refreshTokenResponse.accessToken = token;
    const accessToken = token;
    const expiresIn: number = jwtConstants.accessTokenExpiresIn;
    console.log({ expiresIn, ...refreshTokenResponse });
    console.log('sadsa', accessToken);
    return { expiresIn, ...refreshTokenResponse };
  }
  @Post('logout')
  async logout(@Res({ passthrough: true }) res: Response) {
    res.cookie(cookiesKey.refreshToken, '', {
      httpOnly: true,
      sameSite: 'strict',
      path: '/api/auth/refresh-token',
    });
  }
  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getLogedInUser(@CurrentUser() user: User, @Req() req: Request) {
    const { id } = user;
    console.log(id + 1);
    return await this.authService.getCurrentUser(id);
  }
}
