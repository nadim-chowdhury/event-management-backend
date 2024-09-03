import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsResolver } from './events.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtStrategy } from '../auth/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { RolesGuard } from '../roles/roles.guard';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: 'your_secret_key', // Use a better secret in production
      signOptions: { expiresIn: '7d' },
    }),
  ],
  providers: [EventsService, EventsResolver, RolesGuard, JwtStrategy],
})
export class EventsModule {}
