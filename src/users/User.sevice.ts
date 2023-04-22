import { Inject, Injectable } from '@nestjs/common';
import { UserDto } from './User.dto';
import { StoreService } from 'src/stores/store.sevice';

@Injectable()
export class UserService {
  constructor(@Inject('STORE_SERVICE') private storeService: StoreService) {}

  create(user: UserDto): UserDto {
    this.storeService.save(user);
    return user;
  }
}
