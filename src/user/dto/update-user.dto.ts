import { IsString, IsOptional, IsEnum } from 'class-validator';
import { UserRole } from './create-user.dto';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  status?: string;

  @IsEnum(UserRole)
  @IsOptional()
  role?: UserRole;
}
