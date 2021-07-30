import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Prisma, User } from '@prisma/client';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserService } from './user.service';
import { Request, Response } from 'express';
import { UserCreateDto } from '@portfolio/shared-types';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getUsers(@Req() req: Request): Promise<User[]> {
    return this.userService.users({});
  }

  @Post()
  async createUser(@Body() UserCreateDto: UserCreateDto): Promise<User> {
    return this.userService.createUser(UserCreateDto);
  }
  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() UserCreateDto: Prisma.UserUpdateInput
  ): Promise<User> {
    return this.userService.updateUser({
      where: { id: id },
      data: UserCreateDto,
    });
  }
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return this.userService.deleteUser({ id: id });
  }
}
