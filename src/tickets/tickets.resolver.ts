import { Resolver, Mutation, Args, Query, Int } from '@nestjs/graphql';
import { TicketsService } from './tickets.service';
import { CreateTicketInput } from './dto/create-ticket.input';
import { PurchaseTicketInput } from './dto/purchase-ticket.input';
import { UseGuards } from '@nestjs/common';
import { TicketPurchase } from './ticket-purchase.model';
import { Ticket } from './ticket.model';
import { Roles } from '../roles/roles.decorator';
import { RolesGuard } from '../roles/roles.guard';

@Resolver(() => Ticket)
export class TicketsResolver {
  constructor(private readonly ticketsService: TicketsService) {}

  @Mutation(() => Ticket)
  @Roles('ORGANIZER')
  @UseGuards(RolesGuard)
  async createTicket(
    @Args('createTicketInput') createTicketInput: CreateTicketInput,
    @Args('eventId', { type: () => Int }) eventId: number,
  ) {
    return this.ticketsService.createTicket(createTicketInput, eventId);
  }

  @Mutation(() => TicketPurchase)
  @Roles('ATTENDEE')
  @UseGuards(RolesGuard)
  async purchaseTicket(
    @Args('purchaseTicketInput') purchaseTicketInput: PurchaseTicketInput,
    @Args('userId', { type: () => Int }) userId: number,
  ) {
    return this.ticketsService.purchaseTicket(purchaseTicketInput, userId);
  }

  @Query(() => [TicketPurchase])
  @Roles('ATTENDEE')
  @UseGuards(RolesGuard)
  async userTickets(@Args('userId', { type: () => Int }) userId: number) {
    return this.ticketsService.getUserTickets(userId);
  }
}
