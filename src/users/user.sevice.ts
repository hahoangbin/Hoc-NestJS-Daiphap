import { Inject, Injectable } from '@nestjs/common';
import { UserDto } from './User.dto';
import { StoreConfig } from './user.module';

@Injectable()
export class UserService {
  constructor(@Inject('STORE_CONFIG') storeConfig: StoreConfig) {
    console.log(storeConfig);
  }

  createUser(user: UserDto): UserDto {
    // to do something
    return user;
  }
}
