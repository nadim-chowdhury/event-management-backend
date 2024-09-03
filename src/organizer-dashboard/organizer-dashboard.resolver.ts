import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { OrganizerDashboardService } from './organizer-dashboard.service';
import { TicketPurchase } from 'src/ticket-purchase/ticket-purchase.model';

@Resolver()
export class OrganizerDashboardResolver {
  constructor(
    private readonly organizerDashboardService: OrganizerDashboardService,
  ) {}

  @Query(() => [Event])
  async getOrganizerEvents(
    @Args('organizerId', { type: () => Int }) organizerId: number,
  ) {
    return this.organizerDashboardService.getOrganizerEvents(organizerId);
  }

  @Query(() => [TicketPurchase])
  async getEventAttendees(
    @Args('eventId', { type: () => Int }) eventId: number,
  ) {
    return this.organizerDashboardService.getEventAttendees(eventId);
  }
}
