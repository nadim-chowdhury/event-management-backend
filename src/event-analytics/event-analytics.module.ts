import { Module } from '@nestjs/common';
import { EventAnalyticsService } from './event-analytics.service';
import { EventAnalyticsResolver } from './event-analytics.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [EventAnalyticsService, EventAnalyticsResolver],
})
export class EventAnalyticsModule {}
