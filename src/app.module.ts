import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { UserService } from './users/User.sevice';

@Module({
  imports: [UserModule],
  providers: [
    {
      provide: 'App_USER',
      useClass: UserService,
    },
  ],
})
export class AppModule {}
