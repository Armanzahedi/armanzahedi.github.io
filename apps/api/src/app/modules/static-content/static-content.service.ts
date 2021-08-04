import { Injectable } from '@nestjs/common';
import { Prisma, StaticContent } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class StaticContentService {
  constructor(private prisma: PrismaService) {}

  async staticContent(
    staticContentWhereUniqueInput: Prisma.StaticContentWhereUniqueInput
  ): Promise<StaticContent | null> {
    return this.prisma.staticContent.findUnique({
      where: staticContentWhereUniqueInput,
    });
  }

  async staticContents(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.StaticContentWhereUniqueInput;
    where?: Prisma.StaticContentWhereInput;
    orderBy?: Prisma.StaticContentOrderByInput;
  }): Promise<StaticContent[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.staticContent.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
  async findStaticContent(
    where: Prisma.StaticContentWhereInput
  ): Promise<StaticContent> {
    return await this.prisma.staticContent.findFirst({
      where,
    });
  }
  async createStaticContent(
    data: Prisma.StaticContentCreateInput
  ): Promise<StaticContent> {
    return this.prisma.staticContent.create({
      data,
    });
  }

  async updateStaticContent(params: {
    where: Prisma.StaticContentWhereUniqueInput;
    data: Prisma.StaticContentUpdateInput;
  }): Promise<StaticContent> {
    const { where, data } = params;
    return this.prisma.staticContent.update({
      data,
      where,
    });
  }

  async deleteStaticContent(
    where: Prisma.StaticContentWhereUniqueInput
  ): Promise<StaticContent> {
    return this.prisma.staticContent.delete({
      where,
    });
  }
}
