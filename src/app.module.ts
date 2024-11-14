import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { GroupModule } from './group/group.module';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [DatabaseModule, GroupModule, UserModule, ProfileModule],
})
export class AppModule {}
