// src/group/dto/create-group.dto.ts
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateGroupDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNotEmpty()
  ownerId: number;
}
