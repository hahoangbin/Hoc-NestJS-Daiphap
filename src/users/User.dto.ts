import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, Length } from 'class-validator';
import { BaseDto } from '../base.dto';

export class UserDto extends BaseDto {
  @IsNotEmpty()
  @Expose()
  userName: string;

  firstName: string;

  lastName: string;

  @Expose()
  @Transform(({ obj }) => obj.firstName + ' ' + obj.lastName)
  fullName: string;

  @IsNotEmpty() // thông báo lỗi bỏ trống
  @Length(8, 20) // Password từ 8-20 kí tự
  @Expose()
  password: string;
}
