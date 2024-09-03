import { Injectable } from '@nestjs/common';

@Injectable()
export class EventAnalyticsService {
  constructor(private readonly prisma: any) {}

  async getEventPerformance(eventId: number) {
    const ticketSales = await this.prisma.ticketPurchase.aggregate({
      // _sum: { totalPrice: true },
      _count: { id: true },
      where: { eventId },
    });

    const attendeeDemographics = await this.prisma.user.findMany({
      where: {
        // tickets: {
        //   some: { eventId },
        // },
      },
      select: {
        // age: true,
        // gender: true,
        // location: true,
      },
    });

    return {
      ticketSales: ticketSales._sum.totalPrice,
      ticketCount: ticketSales._count.id,
      attendeeDemographics,
    };
  }
}
