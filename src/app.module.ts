import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { PostModule } from './posts/post.module';
import { StoreModule } from './stores/store.module';

@Module({
  imports: [UserModule, PostModule, StoreModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
