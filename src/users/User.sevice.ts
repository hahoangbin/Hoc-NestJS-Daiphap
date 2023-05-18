import { Inject, Injectable } from '@nestjs/common';
import { StoreService } from 'src/stores/store.sevice';
import { UserDto } from './User.dto';

@Injectable()
export class UserService {

  constructor(@Inject(StoreService) private storeService: StoreService) {}
 
  create(user: UserDto): UserDto {
    this.storeService.save(user)
    return user
  }
}
