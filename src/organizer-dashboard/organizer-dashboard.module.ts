import { Module } from '@nestjs/common';
import { OrganizerDashboardService } from './organizer-dashboard.service';
import { OrganizerDashboardResolver } from './organizer-dashboard.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [OrganizerDashboardService, OrganizerDashboardResolver],
})
export class OrganizerDashboardModule {}
