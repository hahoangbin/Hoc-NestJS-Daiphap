import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { UserService } from './users/User.sevice';
import { StoreModule } from './stores/store.module';
import { PostModule } from './posts/post.module';

@Module({
  imports: [UserModule, StoreModule, PostModule],
  providers: [
    {
      provide: 'App_USER',
      useClass: UserService,
    },
  ],
})
export class AppModule {}
