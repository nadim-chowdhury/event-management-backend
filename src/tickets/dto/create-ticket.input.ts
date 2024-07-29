import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class CreateTicketInput {
  @Field()
  type: string;

  @Field(() => Float)
  price: number;

  @Field(() => Int)
  quantity: number;
}
