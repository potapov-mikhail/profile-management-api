// src/profile/profile.controller.ts
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('api/profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  async getAllProfiles() {
    return this.profileService.getAllProfiles();
  }

  @Get(':id')
  async getProfileById(@Param('id') id: string) {
    return this.profileService.getProfileById(Number(id));
  }

  @Post()
  async createProfile(@Body() createProfileDto: CreateProfileDto) {
    return this.profileService.createProfile(createProfileDto);
  }

  @Patch(':id')
  async updateProfile(
    @Param('id') id: string,
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    return this.profileService.updateProfile(Number(id), updateProfileDto);
  }

  @Delete(':id')
  async deleteProfile(@Param('id') id: string) {
    return this.profileService.deleteProfile(Number(id));
  }
}
