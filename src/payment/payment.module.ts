import { Module } from '@nestjs/common';
// import { StripeService } from './stripe.service';
import { PaymentResolver } from './payment.resolver';
import { StripeService } from 'src/stripe/stripe.service';

@Module({
  providers: [StripeService, PaymentService, PaymentResolver],
})
export class PaymentModule {}
