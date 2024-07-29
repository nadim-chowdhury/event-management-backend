import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Event } from '../event/event.model';

@ObjectType()
export class Ticket {
  @Field(() => Int)
  id: number;

  @Field()
  type: string;

  @Field(() => Float)
  price: number;

  @Field(() => Int)
  quantity: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => Event)
  event: Event;
}
