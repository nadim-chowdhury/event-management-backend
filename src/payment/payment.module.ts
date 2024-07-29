import { Module } from '@nestjs/common';
import { PaymentResolver } from './payment.resolver';
import { PaymentService } from './payment.service';
import { StripeService } from '../stripe/stripe.service';

@Module({
  providers: [StripeService, PaymentService, PaymentResolver],
})
export class PaymentModule {}
