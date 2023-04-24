import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './User.sevice';

@Module({
  controllers: [UserController],
  providers: [
  {
    provide: 'USER_GIANGTB',
    useClass: UserService,
  }],
})
export class UserModule {}
