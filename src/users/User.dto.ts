import { IsNotEmpty, Length } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  userName: string;
  @IsNotEmpty()
  @Length(8, 20)
  password: string;
}
