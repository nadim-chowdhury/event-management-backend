import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrganizerDashboardService {
  constructor(private readonly prisma: any) {}

  async getOrganizerEvents(organizerId: number) {
    return this.prisma.event.findMany({
      // where: { organizerId },
      include: {
        // tickets: true,
        // purchases: true,
      },
    });
  }

  async getEventAttendees(eventId: number) {
    return this.prisma.ticketPurchase.findMany({
      where: { eventId },
      include: { user: true },
    });
  }
}
