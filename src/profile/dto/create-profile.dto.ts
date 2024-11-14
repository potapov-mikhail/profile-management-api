// src/profile/dto/create-profile.dto.ts
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  groupId: number;
}
