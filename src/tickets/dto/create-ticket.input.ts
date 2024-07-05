import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTicketInput {
  @Field()
  type: string;

  @Field()
  price: number;

  @Field()
  quantity: number;
}
