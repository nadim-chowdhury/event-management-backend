import { Module } from '@nestjs/common';
import { UserAnalyticsService } from './user-analytics.service';
import { UserAnalyticsResolver } from './user-analytics.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [UserAnalyticsService, UserAnalyticsResolver],
})
export class UserAnalyticsModule {}
