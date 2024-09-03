import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { NotificationService } from './notification.service';

@Resolver()
export class NotificationResolver {
  constructor(private readonly notificationService: NotificationService) {}

  @Mutation(() => Boolean)
  async sendNotification(
    @Args('event') event: string,
    @Args('data') data: any,
  ): Promise<boolean> {
    this.notificationService.sendNotification(event, data);
    return true;
  }
}
