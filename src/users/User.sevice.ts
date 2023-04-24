import { Injectable } from '@nestjs/common';
import { UserDto } from './User.dto';

@Injectable()
export class UserService {
  createUser(user: any): any {
    user.createdAt = new Date();
    user.updatedAt = new Date();
    user.id = 1;

    return UserDto.plainToClass(user);
  }
}
