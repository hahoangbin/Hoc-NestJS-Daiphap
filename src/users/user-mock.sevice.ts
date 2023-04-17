import { UserDto } from "./User.dto";

export class UserMockService {
  create(user: UserDto): UserDto {
    return {
      userName: 'mock userName',
      password: 'mock password',
    };
  }
}
