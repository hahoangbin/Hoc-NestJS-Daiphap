import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.sevice';

export interface StoreConfig {
  dir: string;
  path: string;
}

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
