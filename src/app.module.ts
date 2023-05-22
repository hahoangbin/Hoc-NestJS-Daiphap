import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { PostModule } from './posts/post.module';
import { AppService } from './app.service';

@Module({
  imports: [UserModule, PostModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
