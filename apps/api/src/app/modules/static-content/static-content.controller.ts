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
import { Prisma, StaticContent } from '@prisma/client';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { StaticContentService } from './static-content.service';
import { Request, Response } from 'express';

@Controller('staticContents')
export class StaticContentController {
  constructor(private readonly staticContentService: StaticContentService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getStaticContents(@Req() req: Request): Promise<StaticContent[]> {
    return this.staticContentService.staticContents({});
  }

  @Post()
  async createStaticContent(
    @Body() StaticContentCreateDto: Prisma.StaticContentCreateInput
  ): Promise<StaticContent> {
    return this.staticContentService.createStaticContent(
      StaticContentCreateDto
    );
  }
  @Put(':id')
  async updateStaticContent(
    @Param('id') id: number,
    @Body() StaticContentCreateDto: Prisma.StaticContentUpdateInput
  ): Promise<StaticContent> {
    return this.staticContentService.updateStaticContent({
      where: { id: id },
      data: StaticContentCreateDto,
    });
  }
  @Delete(':id')
  async deleteStaticContent(@Param('id') id: number): Promise<StaticContent> {
    return this.staticContentService.deleteStaticContent({ id: id });
  }
}
