import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from '../auth/user.model';
import { TicketPurchase } from '../tickets/ticket-purchase.model';

@ObjectType()
export class Event {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  date: Date;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => User)
  user: User;

  @Field(() => [TicketPurchase], { nullable: 'items' })
  ticketPurchases?: TicketPurchase[];
}
