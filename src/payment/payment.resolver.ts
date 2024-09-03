import { Resolver, Mutation, Args } from '@nestjs/graphql';
// import { StripeService } from './stripe.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { ConfirmPaymentDto } from './dto/confirm-payment.dto';
import { StripeService } from 'src/stripe/stripe.service';

@Resolver()
export class PaymentResolver {
  constructor(private readonly stripeService: StripeService) {}

  @Mutation(() => String)
  async createPaymentIntent(
    @Args('createPaymentDto') createPaymentDto: CreatePaymentDto,
  ) {
    const paymentIntent = await this.stripeService.createPaymentIntent(
      createPaymentDto.amount,
      createPaymentDto.currency,
    );
    return paymentIntent.client_secret;
  }

  @Mutation(() => String)
  async confirmPaymentIntent(
    @Args('confirmPaymentDto') confirmPaymentDto: ConfirmPaymentDto,
  ) {
    const paymentIntent = await this.stripeService.confirmPaymentIntent(
      confirmPaymentDto.paymentIntentId,
    );
    return paymentIntent.status;
  }
}
