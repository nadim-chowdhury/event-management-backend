import { InputType, Field } from '@nestjs/graphql';

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

  @Field(() => [CreateTicketInput])
  tickets: CreateTicketInput[];
}
