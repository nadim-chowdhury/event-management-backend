import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserAnalyticsService {
  constructor(private readonly prisma: PrismaService) {}

  async getUserEngagement(userId: number) {
    const eventsAttended = await this.prisma.ticketPurchase.count({
      where: { userId },
    });

    const totalSpent = await this.prisma.ticketPurchase.aggregate({
      // _sum: { totalPrice: true },
      where: { userId },
    });

    return { eventsAttended, totalSpent };
  }

  async getUserBehavior() {
    const activeUsers = await this.prisma.user.findMany({
      where: {
        // tickets: {
        //   some: {},
        // },
      },
      select: {
        id: true,
        email: true,
        // tickets: {
        //   select: { eventId: true },
        // },
      },
    });

    // const userDemographics = await this.prisma.user.groupBy({
    //   by: ['age', 'gender', 'location'],
    //   _count: { id: true },
    // });

    return { activeUsers };
  }
}
