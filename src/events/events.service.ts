import { Injectable } from '@nestjs/common';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { Event } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EventsService {
  constructor(private readonly prisma: any) {}

  async createEvent(
    createEventInput: CreateEventInput,
    organizerId: number,
  ): Promise<Event> {
    const { tickets, ...eventData } = createEventInput;
    // const event = await this.prisma.event.create({
    //   data: {
    //     ...eventData,
    //     // organizer: { connect: { id: organizerId } },
    //     // tickets: {
    //     //   create: tickets,
    //     // },
    //   },
    // });
    return null;
  }

  async updateEvent(updateEventInput: UpdateEventInput): Promise<Event> {
    const { id, tickets, ...eventData } = updateEventInput;
    // const event = await this.prisma.event.update({
    //   where: { id },
    //   data: {
    //     ...eventData,
    //     tickets: {
    //       deleteMany: { eventId: id },
    //       create: tickets,
    //     },
    //   },
    // });
    return null;
  }

  async deleteEvent(id: number): Promise<boolean> {
    await this.prisma.event.delete({ where: { id } });
    return true;
  }

  async getEvent(id: number): Promise<Event | null> {
    return this.prisma.event.findUnique({ where: { id } });
  }

  async getEvents(): Promise<Event[]> {
    return this.prisma.event.findMany();
  }

  async searchEvents(searchTerm: string): Promise<Event[]> {
    return this.prisma.event.findMany({
      where: {
        OR: [
          { title: { contains: searchTerm, mode: 'insensitive' } },
          { description: { contains: searchTerm, mode: 'insensitive' } },
          // { venue: { contains: searchTerm, mode: 'insensitive' } },
        ],
      },
    });
  }
}
