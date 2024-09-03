import { Module, forwardRef } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config'; // Add this for environment configuration
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { AuthModule } from './auth/auth.module';
// import { PrismaModule } from './prisma/prisma.module';
import { GraphqlModule } from './graphql/graphql.module';
import { EventsModule } from './events/events.module';
import { TicketsModule } from './tickets/tickets.module';
import { NotificationModule } from './notification/notification.module';
import { PaymentModule } from './payment/payment.module';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';
import { OrganizerDashboardModule } from './organizer-dashboard/organizer-dashboard.module';
// import { AttendeeDashboardModule } from './attendee-dashboard/attendee-dashboard.module';
import { UserAnalyticsModule } from './user-analytics/user-analytics.module';
import { EventAnalyticsModule } from './event-analytics/event-analytics.module';
import { RolesModule } from './roles/roles.module';
import { StripeModule } from './stripe/stripe.module';
import { AttendeeDashboardModule } from './attendee-dashboard/attendee-dashboard.module';

@Module({
  imports: [
    // ConfigModule.forRoot({ isGlobal: true }), // Ensure this is included for environment variable management
    AdminDashboardModule,
    AttendeeDashboardModule,
    AuthModule,
    EmailModule,
    EventAnalyticsModule,
    EventsModule,
    GraphqlModule,
    NotificationModule,
    OrganizerDashboardModule,
    PaymentModule,
    // PrismaModule,
    RolesModule,
    // forwardRef(() => StripeModule), // Use forwardRef() to resolve circular dependencies
    TicketsModule,
    UserAnalyticsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
