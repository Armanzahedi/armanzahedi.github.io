//user.decorator.ts
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { getSession } from 'next-auth/client';

export const CurrentUser = createParamDecorator(
  async (data: unknown, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    const session = await getSession({ req });
    return session?.user;
  }
);
