import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class PurchaseTicketInput {
  @Field()
  ticketId: number;

  @Field()
  quantity: number;
}
