import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTicketInput } from './dto/create-ticket.input';
import { PurchaseTicketInput } from './dto/purchase-ticket.input';

@Injectable()
export class TicketsService {
  constructor(private readonly prisma: PrismaService) {}

  async createTicket(createTicketInput: CreateTicketInput, eventId: number) {
    const ticket = await this.prisma.ticket.create({
      data: {
        ...createTicketInput,
        event: { connect: { id: eventId } },
      },
    });
    return ticket;
  }

  async purchaseTicket(
    purchaseTicketInput: PurchaseTicketInput,
    userId: number,
  ) {
    const { ticketId, quantity } = purchaseTicketInput;
    const ticket = await this.prisma.ticket.findUnique({
      where: { id: ticketId },
    });

    if (!ticket || ticket.quantity < quantity) {
      throw new Error('Insufficient ticket quantity');
    }

    const totalPrice = ticket.price * quantity;

    const purchase = await this.prisma.ticketPurchase.create({
      data: {
        user: { connect: { id: userId } },
        ticket: { connect: { id: ticketId } },
        quantity,
        totalPrice,
      },
    });

    await this.prisma.ticket.update({
      where: { id: ticketId },
      data: {
        quantity: ticket.quantity - quantity,
      },
    });

    return purchase;
  }

  async getUserTickets(userId: number) {
    return this.prisma.ticketPurchase.findMany({
      where: { userId },
      include: { ticket: true, event: true },
    });
  }
}

//  import { Injectable } from '@nestjs/common';
//  import { PrismaService } from '../prisma/prisma.service';
//  import { CreateTicketInput } from './dto/create-ticket.input';
//  import { PurchaseTicketInput } from './dto/purchase-ticket.input';
//  import { EmailService } from '../email/email.service';

//  @Injectable()
//  export class TicketsService {
//    constructor(
//      private readonly prisma: PrismaService,
//      private readonly emailService: EmailService,
//    ) {}

//    async createTicket(createTicketInput: CreateTicketInput, eventId: number) {
//      const ticket = await this.prisma.ticket.create({
//        data: {
//          ...createTicketInput,
//          event: { connect: { id: eventId } },
//        },
//      });
//      return ticket;
//    }

//    async purchaseTicket(
//      purchaseTicketInput: PurchaseTicketInput,
//      userId: number,
//    ) {
//      const { ticketId, quantity } = purchaseTicketInput;
//      const ticket = await this.prisma.ticket.findUnique({
//        where: { id: ticketId },
//      });

//      if (!ticket || ticket.quantity < quantity) {
//        throw new Error('Insufficient ticket quantity');
//      }

//      const totalPrice = ticket.price * quantity;

//      const purchase = await this.prisma.ticketPurchase.create({
//        data: {
//          user: { connect: { id: userId } },
//          ticket: { connect: { id: ticketId } },
//          quantity,
//          totalPrice,
//        },
//      });

//      await this.prisma.ticket.update({
//        where: { id: ticketId },
//        data: {
//          quantity: ticket.quantity - quantity,
//        },
//      });

//      const user = await this.prisma.user.findUnique({ where: { id: userId } });

//      // Send email notification
//      await this.emailService.sendMail(
//        user.email,
//        'Ticket Purchase Confirmation',
//        `You have successfully purchased ${quantity} tickets for ${ticket.type} at ${ticket.event.title}. Total price: ${totalPrice}`,
//      );

//      return purchase;
//    }

//    async getUserTickets(userId: number) {
//      return this.prisma.ticketPurchase.findMany({
//        where: { userId },
//        include: { ticket: true, event: true },
//      });
//    }
//  }

// import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';
// import { CreateTicketInput } from './dto/create-ticket.input';
// import { PurchaseTicketInput } from './dto/purchase-ticket.input';
// import { EmailService } from '../email/email.service';
// import { NotificationGateway } from '../notification/notification.gateway';

// @Injectable()
// export class TicketsService {
//   constructor(
//     private readonly prisma: PrismaService,
//     private readonly emailService: EmailService,
//     private readonly notificationGateway: NotificationGateway,
//   ) {}

//   async createTicket(createTicketInput: CreateTicketInput, eventId: number) {
//     const ticket = await this.prisma.ticket.create({
//       data: {
//         ...createTicketInput,
//         event: { connect: { id: eventId } },
//       },
//     });
//     return ticket;
//   }

//   async purchaseTicket(
//     purchaseTicketInput: PurchaseTicketInput,
//     userId: number,
//   ) {
//     const { ticketId, quantity } = purchaseTicketInput;
//     const ticket = await this.prisma.ticket.findUnique({
//       where: { id: ticketId },
//     });

//     if (!ticket || ticket.quantity < quantity) {
//       throw new Error('Insufficient ticket quantity');
//     }

//     const totalPrice = ticket.price * quantity;

//     const purchase = await this.prisma.ticketPurchase.create({
//       data: {
//         user: { connect: { id: userId } },
//         ticket: { connect: { id: ticketId } },
//         quantity,
//         totalPrice,
//       },
//     });

//     await this.prisma.ticket.update({
//       where: { id: ticketId },
//       data: {
//         quantity: ticket.quantity - quantity,
//       },
//     });

//     const user = await this.prisma.user.findUnique({ where: { id: userId } });

//     // Send email notification
//     await this.emailService.sendMail(
//       user.email,
//       'Ticket Purchase Confirmation',
//       `You have successfully purchased ${quantity} tickets for ${ticket.type} at ${ticket.event.title}. Total price: ${totalPrice}`,
//     );

//     // Send in-app notification
//     await this.notificationGateway.sendNotification('ticketPurchased', {
//       userId,
//       message: `You have successfully purchased ${quantity} tickets for ${ticket.type} at ${ticket.event.title}.`,
//     });

//     return purchase;
//   }

//   async getUserTickets(userId: number) {
//     return this.prisma.ticketPurchase.findMany({
//       where: { userId },
//       include: { ticket: true, event: true },
//     });
//   }
// }

// import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';
// import { CreateTicketInput } from './dto/create-ticket.input';
// import { PurchaseTicketInput } from './dto/purchase-ticket.input';
// import { EmailService } from '../email/email.service';
// import { NotificationGateway } from '../notification/notification.gateway';
// import { StripeService } from '../payment/stripe.service';

// @Injectable()
// export class TicketsService {
//   constructor(
//     private readonly prisma: PrismaService,
//     private readonly emailService: EmailService,
//     private readonly notificationGateway: NotificationGateway,
//     private readonly stripeService: StripeService,
//   ) {}

//   async createTicket(createTicketInput: CreateTicketInput, eventId: number) {
//     const ticket = await this.prisma.ticket.create({
//       data: {
//         ...createTicketInput,
//         event: { connect: { id: eventId } },
//       },
//     });
//     return ticket;
//   }

//   async purchaseTicket(
//     purchaseTicketInput: PurchaseTicketInput,
//     userId: number,
//   ) {
//     const { ticketId, quantity, paymentIntentId } = purchaseTicketInput;
//     const ticket = await this.prisma.ticket.findUnique({
//       where: { id: ticketId },
//     });

//     if (!ticket || ticket.quantity < quantity) {
//       throw new Error('Insufficient ticket quantity');
//     }

//     const totalPrice = ticket.price * quantity;

//     const paymentIntent =
//       await this.stripeService.confirmPaymentIntent(paymentIntentId);

//     if (paymentIntent.status !== 'succeeded') {
//       throw new Error('Payment failed');
//     }

//     const purchase = await this.prisma.ticketPurchase.create({
//       data: {
//         user: { connect: { id: userId } },
//         ticket: { connect: { id: ticketId } },
//         quantity,
//         totalPrice,
//       },
//     });

//     await this.prisma.ticket.update({
//       where: { id: ticketId },
//       data: {
//         quantity: ticket.quantity - quantity,
//       },
//     });

//     const user = await this.prisma.user.findUnique({ where: { id: userId } });

//     // Send email notification
//     await this.emailService.sendMail(
//       user.email,
//       'Ticket Purchase Confirmation',
//       `You have successfully purchased ${quantity} tickets for ${ticket.type} at ${ticket.event.title}. Total price: ${totalPrice}`,
//     );

//     // Send in-app notification
//     await this.notificationGateway.sendNotification('ticketPurchased', {
//       userId,
//       message: `You have successfully purchased ${quantity} tickets for ${ticket.type} at ${ticket.event.title}.`,
//     });

//     return purchase;
//   }

//   async getUserTickets(userId: number) {
//     return this.prisma.ticketPurchase.findMany({
//       where: { userId },
//       include: { ticket: true, event: true },
//     });
//   }
// }
