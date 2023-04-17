import { Injectable } from '@nestjs/common';
import { UserDto } from './User.dto';

@Injectable()
export class UserService {
  createUser(user: UserDto): UserDto {
    // to do something
    return user;
  }
}
