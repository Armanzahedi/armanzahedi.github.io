import { Module } from '@nestjs/common';
import { GlobalModule } from './global.module';
import { AuthModule } from './modules/auth/auth.module';
import { StaticContentModule } from './modules/static-content/static-content.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [GlobalModule, UserModule, AuthModule, StaticContentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
