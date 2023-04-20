import { UserDto } from "./User.dto";

export class UserMockService {
  create(user: UserDto): UserDto {
    return {
      firstName: 'mock',
      lastName: 'userName',
      password: 'mock password',
      fullName: 'userName',
      id: 4545,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
}
