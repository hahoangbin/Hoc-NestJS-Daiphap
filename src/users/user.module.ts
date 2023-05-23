import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { StoreModule } from 'src/stores/store.module';

@Module({
  imports: [
    StoreModule.forFeature({
      filename: 'user.json',
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
