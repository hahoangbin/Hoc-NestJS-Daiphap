import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.sevice';

export interface StoreConfig {
  dir: string;
  path: string;
}

const configFacebook = {
  appId: 'facebook001',
  appSecret: 'facebook001',
};

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: 'STORE_CONFIG',
      useValue: {
        dir: 'store',
        path: 'store',
      } as StoreConfig,
    },
  ],
})
export class UserModule {}
