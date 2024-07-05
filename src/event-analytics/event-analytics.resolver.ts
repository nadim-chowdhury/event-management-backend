import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { EventAnalyticsService } from './event-analytics.service';

@Resolver()
export class EventAnalyticsResolver {
  constructor(private readonly eventAnalyticsService: EventAnalyticsService) {}

  @Query(() => String)
  async getEventPerformance(
    @Args('eventId', { type: () => Int }) eventId: number,
  ) {
    return this.eventAnalyticsService.getEventPerformance(eventId);
  }
}
