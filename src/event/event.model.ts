import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { TicketPurchase } from '../ticket-purchase/ticket-purchase.model';

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
