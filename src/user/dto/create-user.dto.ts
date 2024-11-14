import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty, IsEnum } from 'class-validator';

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    example: 'user@example.com',
    description: 'Email пользователя',
  })
  email: string;

  @IsString()
  @IsEnum(UserRole)
  @ApiProperty({ example: 'USER', description: 'Роль пользователя' })
  role: UserRole;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'active', description: 'Статус пользователя' })
  status: string;
}
