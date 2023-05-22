import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserDto } from './User.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() user: UserDto): UserDto {
    return this.userService.create(user);
  }

  @Get('id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return 'test';
  }
}
