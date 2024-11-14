// src/group/group.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

@Injectable()
export class GroupService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllGroups() {
    return this.prisma.group.findMany();
  }

  async getGroupById(id: number) {
    return this.prisma.group.findUnique({ where: { id } });
  }

  async createGroup(data: CreateGroupDto) {
    return this.prisma.group.create({ data });
  }

  async updateGroup(id: number, data: UpdateGroupDto) {
    return this.prisma.group.update({
      where: { id },
      data,
    });
  }

  async deleteGroup(id: number) {
    return this.prisma.group.delete({ where: { id } });
  }

  async getUsersByGroupId(groupId: number) {
    return this.prisma.userGroup.findMany({
      where: { groupId },
      include: { user: true },
    });
  }

  async addUserToGroup(groupId: number, userId: number) {
    return this.prisma.userGroup.create({
      data: {
        groupId,
        userId,
      },
    });
  }

  async removeUserFromGroup(groupId: number, userId: number) {
    return this.prisma.userGroup.deleteMany({
      where: {
        groupId,
        userId,
      },
    });
  }
}
