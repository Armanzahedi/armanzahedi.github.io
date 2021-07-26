import { User } from '@prisma/client';

export class UserAuthResponse {
  user: Pick<User, 'id' | 'email'>;
  accessToken: string;
  refreshToken: string;
}
