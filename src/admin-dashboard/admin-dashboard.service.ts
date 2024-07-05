import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AdminDashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async getSystemMetrics() {
    const userCount = await this.prisma.user.count();
    const eventCount = await this.prisma.event.count();
    const ticketSales = await this.prisma.ticketPurchase.count();
    return { userCount, eventCount, ticketSales };
  }

  async getUsers() {
    return this.prisma.user.findMany();
  }

  async getEvents() {
    return this.prisma.event.findMany();
  }
}
