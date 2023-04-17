import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.sevice';
import { UserMockService } from './user-mock.sevice';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: UserService,
      useClass: UserMockService,
    },
  ],
})
export class UserModule {}
