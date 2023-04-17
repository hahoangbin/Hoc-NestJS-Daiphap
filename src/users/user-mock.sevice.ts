import { UserDto } from "./User.dto";

export class UserMockService {
  create(user: UserDto): UserDto {
    return {
      name: 'mock userName',
      password: 'mock password',
      username: 'giangTB',
    };
  }
}
