import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { AttendeeDashboardService } from './attendee-dashboard.service';
import { TicketPurchase } from '../tickets/ticket-purchase.model';

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
