// src/profile/profile.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllProfiles() {
    return this.prisma.profile.findMany();
  }

  async getProfileById(id: number) {
    return this.prisma.profile.findUnique({ where: { id } });
  }

  async createProfile(data: CreateProfileDto) {
    return this.prisma.profile.create({ data });
  }

  async updateProfile(id: number, data: UpdateProfileDto) {
    return this.prisma.profile.update({
      where: { id },
      data,
    });
  }

  async deleteProfile(id: number) {
    return this.prisma.profile.delete({ where: { id } });
  }
}
