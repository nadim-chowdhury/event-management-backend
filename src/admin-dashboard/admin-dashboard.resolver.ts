import { Resolver, Query } from '@nestjs/graphql';
import { AdminDashboardService } from './admin-dashboard.service';
import { User } from '../auth/user.model';
import { Event } from '../event/event.model';
import { TicketPurchase } from '../tickets/ticket-purchase.model';

@Resolver()
export class AdminDashboardResolver {
  constructor(private readonly adminDashboardService: AdminDashboardService) {}

  @Query(() => String)
  async getSystemMetrics() {
    const metrics = await this.adminDashboardService.getSystemMetrics();
    return JSON.stringify(metrics); // Assuming you want to return a JSON string
  }

  @Query(() => [User])
  async getUsers() {
    return this.adminDashboardService.getUsers();
  }

  @Query(() => [Event])
  async getEvents() {
    return this.adminDashboardService.getEvents();
  }

  @Query(() => [TicketPurchase])
  async getTicketPurchases() {
    return this.adminDashboardService.getTicketPurchases();
  }
}
