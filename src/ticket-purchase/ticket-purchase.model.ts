import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Event } from '../event/event.model';

@ObjectType()
export class TicketPurchase {
  @Field(() => Int)
  id: number;

  @Field(() => User)
  user: User;

  @Field(() => Event)
  event: Event;

  @Field()
  createdAt: Date;
}
