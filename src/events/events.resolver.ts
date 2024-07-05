import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EventsService } from './events.service';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { Event } from '@prisma/client';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '@prisma/client';

@Resolver('Event')
export class EventsResolver {
  constructor(private readonly eventsService: EventsService) {}

  @Mutation(() => Event)
  @Roles(Role.ORGANIZER)
  @UseGuards(RolesGuard)
  async createEvent(
    @Args('createEventInput') createEventInput: CreateEventInput,
    @Args('organizerId') organizerId: number,
  ) {
    return this.eventsService.createEvent(createEventInput, organizerId);
  }

  @Mutation(() => Event)
  @Roles(Role.ORGANIZER)
  @UseGuards(RolesGuard)
  async updateEvent(
    @Args('updateEventInput') updateEventInput: UpdateEventInput,
  ) {
    return this.eventsService.updateEvent(updateEventInput);
  }

  @Mutation(() => Boolean)
  @Roles(Role.ORGANIZER)
  @UseGuards(RolesGuard)
  async deleteEvent(@Args('id') id: number) {
    return this.eventsService.deleteEvent(id);
  }

  @Query(() => Event)
  async event(@Args('id') id: number) {
    return this.eventsService.getEvent(id);
  }

  @Query(() => [Event])
  async events() {
    return this.eventsService.getEvents();
  }

  @Query(() => [Event])
  async searchEvents(@Args('searchTerm') searchTerm: string) {
    return this.eventsService.searchEvents(searchTerm);
  }
}
