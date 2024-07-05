import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { AttendeeDashboardService } from './attendee-dashboard.service';

@Resolver()
export class AttendeeDashboardResolver {
  constructor(
    private readonly attendeeDashboardService: AttendeeDashboardService,
  ) {}

  @Query(() => [TicketPurchase])
  async getUserEvents(@Args('userId', { type: () => Int }) userId: number) {
    return this.attendeeDashboardService.getUserEvents(userId);
  }
}
