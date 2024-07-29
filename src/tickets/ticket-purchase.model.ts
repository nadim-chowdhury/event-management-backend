import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { User } from '../auth/user.model';
import { Ticket } from './ticket.model';

@ObjectType()
export class TicketPurchase {
  @Field(() => Int)
  id: number;

  @Field(() => User)
  user: User;

  @Field(() => Ticket)
  ticket: Ticket;

  @Field(() => Int)
  quantity: number;

  @Field(() => Float)
  totalPrice: number;

  @Field()
  createdAt: Date;
}
