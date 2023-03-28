import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  getAllUsers() {
    return [
      {
        name: 'Minh',
        age: 18,
      },
      {
        name: 'HA',
        age: 22,
      },
      {
        name: 'Tom',
        age: 33,
      },
    ];
  }

  @Post()
  createUser() {
    return {
      name: 'Create',
      date: 2222,
    };
  }
}
