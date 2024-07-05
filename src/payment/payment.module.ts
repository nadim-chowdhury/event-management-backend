import { Module } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { PaymentResolver } from './payment.resolver';

@Module({
  providers: [StripeService, PaymentResolver],
})
export class PaymentModule {}
