import { Expose } from 'class-transformer';
import { IsNotEmpty, Length } from 'class-validator';
import { BaseDto } from 'src/base.dto';

export class UserDto extends BaseDto {
  @IsNotEmpty()
  @Expose()
  firstName: string;
  @Expose()
  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty() // thông báo lỗi bỏ trống
  @Length(8, 20) // Password từ 8-20 kí tự
  @Expose()
  password: number;
}
