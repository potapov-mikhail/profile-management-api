// src/group/group.controller.ts
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

@Controller('api/groups')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Get()
  async getAllGroups() {
    return this.groupService.getAllGroups();
  }

  @Get(':id')
  async getGroupById(@Param('id') id: string) {
    return this.groupService.getGroupById(Number(id));
  }

  @Post()
  async createGroup(@Body() createGroupDto: CreateGroupDto) {
    return this.groupService.createGroup(createGroupDto);
  }

  @Patch(':id')
  async updateGroup(
    @Param('id') id: string,
    @Body() updateGroupDto: UpdateGroupDto,
  ) {
    return this.groupService.updateGroup(Number(id), updateGroupDto);
  }

  @Delete(':id')
  async deleteGroup(@Param('id') id: string) {
    return this.groupService.deleteGroup(Number(id));
  }

  @Get(':id/users')
  async getUsersByGroupId(@Param('id') groupId: string) {
    return this.groupService.getUsersByGroupId(Number(groupId));
  }

  @Post(':id/users/:userId')
  async addUserToGroup(
    @Param('id') groupId: string,
    @Param('userId') userId: string,
  ) {
    return this.groupService.addUserToGroup(Number(groupId), Number(userId));
  }

  @Delete(':id/users/:userId')
  async removeUserFromGroup(
    @Param('id') groupId: string,
    @Param('userId') userId: string,
  ) {
    return this.groupService.removeUserFromGroup(
      Number(groupId),
      Number(userId),
    );
  }
}
