import { Injectable } from '@nestjs/common';
import { UserDto } from './User.dto';

@Injectable()
export class UserService {
  createUser(user: UserDto): UserDto {
    return user;
  }
}
