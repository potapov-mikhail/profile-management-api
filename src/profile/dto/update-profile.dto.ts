// src/profile/dto/update-profile.dto.ts
import { IsString, IsOptional } from 'class-validator';

export class UpdateProfileDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsOptional()
  groupId?: number;
}
