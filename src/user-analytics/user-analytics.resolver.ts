import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { UserAnalyticsService } from './user-analytics.service';

@Resolver()
export class UserAnalyticsResolver {
  constructor(private readonly userAnalyticsService: UserAnalyticsService) {}

  @Query(() => String)
  async getUserEngagement(@Args('userId', { type: () => Int }) userId: number) {
    return this.userAnalyticsService.getUserEngagement(userId);
  }

  @Query(() => String)
  async getUserBehavior() {
    return this.userAnalyticsService.getUserBehavior();
  }
}
