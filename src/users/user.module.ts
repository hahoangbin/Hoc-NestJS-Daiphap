import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { StoreService } from 'src/stores/store.sevice';
import { StoreConfig } from 'src/stores/store.config';

function createStore(config: StoreConfig): StoreService {
  console.log(config);
  return new StoreService();
}

@Module({
  controllers: [UserController],

  providers: [
    {
      provide: 'STORE_CONFIG',
      useValue: {
        dir: 'store',
        path: 'user',
      } as StoreConfig,
    },
    {
      provide: 'STORE_SERVICE',
      useFactory: createStore,
      inject: [
        {
          token: 'STORE_CONFIG',
          optional: true,
        },
      ],
    },
  ],
})
export class UserModule {}
