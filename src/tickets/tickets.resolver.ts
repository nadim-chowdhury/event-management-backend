import { Resolver, Mutation, Args, Query, Int } from '@nestjs/graphql';
import { TicketsService } from './tickets.service';
import { CreateTicketInput } from './dto/create-ticket.input';
import { PurchaseTicketInput } from './dto/purchase-ticket.input';
// import { Ticket, TicketPurchase } from '@prisma/client';
import { UseGuards } from '@nestjs/common';
// import { RolesGuard } from '../auth/roles.guard';
// import { Roles } from '../auth/roles.decorator';
// import { Role } from '@prisma/client';

@Resolver(() => Ticket)
export class TicketsResolver {
  constructor(private readonly ticketsService: TicketsService) {}

  // @Mutation(() => Ticket)
  // @Roles(Role.ORGANIZER)
  // @UseGuards(RolesGuard)
  async createTicket(
    @Args('createTicketInput') createTicketInput: CreateTicketInput,
    @Args('eventId', { type: () => Int }) eventId: number,
  ) {
    return this.ticketsService.createTicket(createTicketInput, eventId);
  }

  // @Mutation(() => TicketPurchase)
  // @Roles(Role.ATTENDEE)
  // @UseGuards(RolesGuard)
  async purchaseTicket(
    @Args('purchaseTicketInput') purchaseTicketInput: PurchaseTicketInput,
    @Args('userId', { type: () => Int }) userId: number,
  ) {
    return this.ticketsService.purchaseTicket(purchaseTicketInput, userId);
  }

  // @Query(() => [TicketPurchase])
  // @Roles(Role.ATTENDEE)
  // @UseGuards(RolesGuard)
  async userTickets(@Args('userId') userId: number) {
    return this.ticketsService.getUserTickets(userId);
  }
}
