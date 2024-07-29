import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { EmailService } from './email.service';

@Resolver()
export class EmailResolver {
  constructor(private readonly emailService: EmailService) {}

  @Mutation(() => Boolean)
  async sendEmail(
    @Args('to') to: string,
    @Args('subject') subject: string,
    @Args('text') text: string,
  ): Promise<boolean> {
    try {
      await this.emailService.sendMail(to, subject, text);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
