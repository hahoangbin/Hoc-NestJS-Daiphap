import { Injectable } from '@nestjs/common';
import { UserDto } from '../User.dto';

@Injectable()
export class UserService {
  createUser(user: any): any {
    user.id = 1;
    user.createdAt = new Date();
    user.updatedAt = new Date();
    console.log(user);

    return UserDto.plainToClass(user);
  }
}
