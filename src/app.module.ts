import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { GraphqlModule } from './graphql/graphql.module';
import { EventsModule } from './events/events.module';
import { TicketsModule } from './tickets/tickets.module';
import { NotificationModule } from './notification/notification.module';
import { PaymentModule } from './payment/payment.module';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';
import { OrganizerDashboardModule } from './organizer-dashboard/organizer-dashboard.module';
import { AttendeeDashboardModule } from './attendee-dashboard/attendee-dashboard.module';
import { UserAnalyticsModule } from './user-analytics/user-analytics.module';
import { EventAnalyticsModule } from './event-analytics/event-analytics.module';
import { RolesModule } from './roles/roles.module';
import { StripeModule } from './stripe/stripe.module';

@Module({
  imports: [
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
    PrismaModule,
    RolesModule,
    StripeModule,
    TicketsModule,
    UserAnalyticsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// import { Module } from '@nestjs/common';
// import { AuthModule } from './auth/auth.module';
// import { PrismaModule } from './prisma/prisma.module';
// import { GraphqlModule } from './graphql/graphql.module';

// @Module({
//   imports: [AuthModule, PrismaModule, GraphqlModule],
// })
// export class AppModule {}

// import { Module } from '@nestjs/common';
// import { AuthModule } from './auth/auth.module';
// import { PrismaModule } from './prisma/prisma.module';
// import { GraphqlModule } from './graphql/graphql.module';
// import { EventsModule } from './events/events.module';

// @Module({
//   imports: [AuthModule, PrismaModule, GraphqlModule, EventsModule],
// })
// export class AppModule {}

// import { Module } from '@nestjs/common';
// import { AuthModule } from './auth/auth.module';
// import { PrismaModule } from './prisma/prisma.module';
// import { GraphqlModule } from './graphql/graphql.module';
// import { EventsModule } from './events/events.module';
// import { TicketsModule } from './tickets/tickets.module';

// @Module({
//   imports: [
//     AuthModule,
//     PrismaModule,
//     GraphqlModule,
//     EventsModule,
//     TicketsModule,
//   ],
// })
// export class AppModule {}
