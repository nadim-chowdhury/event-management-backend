import { InputType, Field } from '@nestjs/graphql';
import { CreateTicketInput } from './create-ticket.input';

@InputType()
export class CreateEventInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  date: Date;

  @Field()
  time: string;

  @Field()
  venue: string;

  @Field(() => [CreateTicketInput], { nullable: 'items' })
  tickets?: CreateTicketInput[];
}
