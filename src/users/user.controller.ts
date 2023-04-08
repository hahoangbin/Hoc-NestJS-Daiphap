import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { UserDto } from '../User.dto';
import { UserService } from './user.sevice';

@Controller('users')
export class UserController {
  constructor(
    @Inject('USER_SERVICE_ABC') private readonly userService: UserService,
  ) {}

  @Post()
  createUser(@Body() user: UserDto): UserDto {
    return this.userService.createUser(user);
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    console.log(id);
    return 'test';
  }
}
