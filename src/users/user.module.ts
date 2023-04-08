import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.sevice';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: 'USER_SERVICE_ABC',
      useClass: UserService,
    },
  ],
})
export class UserModule {}
