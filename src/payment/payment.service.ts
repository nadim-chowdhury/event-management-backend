import { Injectable } from '@nestjs/common';
import { StripeService } from '../stripe/stripe.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { ConfirmPaymentDto } from './dto/confirm-payment.dto';

@Injectable()
export class PaymentService {
  constructor(private readonly stripeService: StripeService) {}

  async createPaymentIntent(createPaymentDto: CreatePaymentDto) {
    const paymentIntent = await this.stripeService.createPaymentIntent(
      createPaymentDto.amount,
      createPaymentDto.currency,
    );
    return paymentIntent.client_secret;
  }

  async confirmPaymentIntent(confirmPaymentDto: ConfirmPaymentDto) {
    const paymentIntent = await this.stripeService.confirmPaymentIntent(
      confirmPaymentDto.paymentIntentId,
    );
    return paymentIntent.status;
  }
}
