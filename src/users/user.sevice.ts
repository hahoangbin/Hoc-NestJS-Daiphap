import { Inject, Injectable } from '@nestjs/common';
import { UserDto } from './User.dto';
import { StoreConfig } from './user.module';

@Injectable()
export class UserService {
  createUser(user: UserDto): UserDto {
    // to do something
    return user;
  }
}
