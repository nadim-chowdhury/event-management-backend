import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class TicketInput {
  @Field()
  type: string;

  @Field()
  price: number;

  @Field(() => Int)
  quantity: number;
}
