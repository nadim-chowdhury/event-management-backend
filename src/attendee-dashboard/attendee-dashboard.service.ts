import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AttendeeDashboardService {
  constructor(private readonly prisma: any) {}

  async getUserEvents(userId: number) {
    return this.prisma.ticketPurchase.findMany({
      where: { userId },
      // include: { event: true, ticket: true },
    });
  }
}
