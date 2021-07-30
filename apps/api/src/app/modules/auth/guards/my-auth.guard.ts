import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { getSession } from 'next-auth/client';

@Injectable()
export class MyAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const session = await getSession({ req });
    console.log(session);
    return !!session;
  }
}
