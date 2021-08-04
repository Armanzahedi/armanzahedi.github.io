import { Module } from '@nestjs/common';
import { StaticContentController } from './static-content.controller';
import { StaticContentService } from './static-content.service';

@Module({
  controllers: [StaticContentController],
  providers: [StaticContentService],
  exports: [StaticContentService],
})
export class StaticContentModule {}
