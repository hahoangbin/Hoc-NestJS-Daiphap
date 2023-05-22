import { Injectable } from '@nestjs/common';
import { StoreService } from 'src/stores/store.service';
import { UserDto } from './User.dto';

@Injectable()
export class UserService {
  constructor(private storeService: StoreService) {}

  create(user: UserDto): UserDto {
    this.storeService.save(user);
    return user;
  }
}
