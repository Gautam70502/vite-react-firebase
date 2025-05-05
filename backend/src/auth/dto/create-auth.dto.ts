import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UsersAuthDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  // @IsStrongPassword()
  password: string;

  @IsNotEmpty()
  @IsString()
  fcmToken: string;
}
