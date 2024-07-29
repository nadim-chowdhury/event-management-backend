import { Module } from '@nestjs/common';
import { OrganizerDashboardResolver } from './organizer-dashboard.resolver';
import { OrganizerDashboardService } from './organizer-dashboard.service';
import { PrismaModule } from 'src/prisma/prisma.module'; // Ensure the correct path to PrismaModule

@Module({
  imports: [PrismaModule],
  providers: [OrganizerDashboardService, OrganizerDashboardResolver],
})
export class OrganizerDashboardModule {}
