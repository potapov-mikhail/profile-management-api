import { IsString, IsEmail, IsNotEmpty, IsEnum } from 'class-validator';

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsEnum(UserRole)
  role: UserRole;

  @IsString()
  @IsNotEmpty()
  status: string;
}
