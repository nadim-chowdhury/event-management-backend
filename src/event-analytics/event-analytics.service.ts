import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EventAnalyticsService {
  constructor(private readonly prisma: PrismaService) {}

  async getEventPerformance(eventId: number) {
    const ticketSales = await this.prisma.ticketPurchase.aggregate({
      _sum: { totalPrice: true },
      _count: { id: true },
      where: { eventId },
    });

    const attendeeDemographics = await this.prisma.user.findMany({
      where: {
        tickets: {
          some: { eventId },
        },
      },
      select: {
        age: true,
        gender: true,
        location: true,
      },
    });

    return { ticketSales, attendeeDemographics };
  }
}
