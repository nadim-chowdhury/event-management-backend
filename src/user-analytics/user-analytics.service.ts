import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserAnalyticsService {
  constructor(private readonly prisma: PrismaService) {}

  async getUserEngagement(userId: number) {
    const eventsAttended = await this.prisma.ticketPurchase.count({
      where: { userId },
    });

    const totalSpent = await (this.prisma.ticketPurchase as any).aggregate({
      _sum: { totalPrice: true },
      where: { userId },
    });

    return {
      eventsAttended,
      totalSpent: (totalSpent?._sum as any)?.totalPrice ?? 0,
    };
  }

  async getUserBehavior() {
    const activeUsers = await (this.prisma.user as any).findMany({
      where: {
        ticketPurchases: {
          some: {},
        },
      },
      select: {
        id: true,
        email: true,
        age: true,
        gender: true,
        location: true,
        ticketPurchases: {
          select: { eventId: true },
        },
      },
    });

    const userDemographics = this.processUserDemographics(activeUsers);

    return { activeUsers, userDemographics };
  }

  private processUserDemographics(users: any[]) {
    const demographics = users.reduce(
      (acc, user) => {
        const { age, gender, location } = user;

        if (!acc.age[age]) acc.age[age] = 0;
        if (!acc.gender[gender]) acc.gender[gender] = 0;
        if (!acc.location[location]) acc.location[location] = 0;

        acc.age[age]++;
        acc.gender[gender]++;
        acc.location[location]++;

        return acc;
      },
      { age: {}, gender: {}, location: {} },
    );

    return demographics;
  }
}
