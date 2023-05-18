import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './User.sevice';
import { StoreModule } from 'src/stores/store.module';

@Module({
  imports: [
    StoreModule.register({
      dirname: 'store',
      filename: 'user.json',
    }),
  ],
  controllers: [UserController],
  providers: [
    {
      provide: 'USER_GIANGTB',
      useClass: UserService,
    },
  ],
})
export class UserModule {}
