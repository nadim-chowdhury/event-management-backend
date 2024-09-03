import { Injectable } from '@nestjs/common';
import { CreateTicketInput } from './dto/create-ticket.input';
import { PurchaseTicketInput } from './dto/purchase-ticket.input';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TicketsService {
  constructor(private readonly prisma: any) {}

  async createTicket(createTicketInput: CreateTicketInput, eventId: number) {
    // const ticket = await this.prisma.ticket.create({
    //   data: {
    //     ...createTicketInput,
    //     event: { connect: { id: eventId } },
    //   },
    // });
    return null;
  }

  async purchaseTicket(
    purchaseTicketInput: PurchaseTicketInput,
    userId: number,
  ) {
    const { ticketId, quantity } = purchaseTicketInput;
    // const ticket = await this.prisma.ticket.findUnique({
    //   where: { id: ticketId },
    // });

    // if (!ticket || ticket.quantity < quantity) {
    //   throw new Error('Insufficient ticket quantity');
    // }

    // const totalPrice = ticket.price * quantity;

    // const purchase = await this.prisma.ticketPurchase.create({
    //   data: {
    //     // user: { connect: { id: userId } },
    //     // ticket: { connect: { id: ticketId } },
    //     // quantity,
    //     // totalPrice,
    //   },
    // });

    // await this.prisma.ticket.update({
    //   where: { id: ticketId },
    //   data: {
    //     quantity: ticket.quantity - quantity,
    //   },
    // });

    return null;
  }

  async getUserTickets(userId: number) {
    return this.prisma.ticketPurchase.findMany({
      where: { userId },
      // include: { ticket: true, event: true },
    });
  }
}
