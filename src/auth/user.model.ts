import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Event } from '../event/event.model';
import { TicketPurchase } from '../tickets/ticket-purchase.model';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => [Event], { nullable: 'items' })
  events?: Event[];

  @Field(() => [TicketPurchase], { nullable: 'items' })
  ticketPurchases?: TicketPurchase[];
}
