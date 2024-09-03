// attendee-dashboard.module.ts
import { Module } from '@nestjs/common';
import { AttendeeDashboardService } from './attendee-dashboard.service';
import { AttendeeDashboardResolver } from './attendee-dashboard.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [AttendeeDashboardService, AttendeeDashboardResolver],
})
export class AttendeeDashboardModule {}
