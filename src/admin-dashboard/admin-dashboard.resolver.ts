import { Resolver, Query } from '@nestjs/graphql';
import { AdminDashboardService } from './admin-dashboard.service';

@Resolver()
export class AdminDashboardResolver {
  constructor(private readonly adminDashboardService: AdminDashboardService) {}

  @Query(() => String)
  async getSystemMetrics() {
    return this.adminDashboardService.getSystemMetrics();
  }

  @Query(() => [User])
  async getUsers() {
    return this.adminDashboardService.getUsers();
  }

  @Query(() => [Event])
  async getEvents() {
    return this.adminDashboardService.getEvents();
  }
}
