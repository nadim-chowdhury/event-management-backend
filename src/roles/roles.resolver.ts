import { Resolver, Mutation, Args, Query, Int } from '@nestjs/graphql';
import { RolesService } from './roles.service';
// import { Role } from '@prisma/client';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';

@Resolver('Role')
export class RolesResolver {
  constructor(private readonly rolesService: RolesService) {}

  @Mutation(() => Boolean)
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  async assignRole(
    @Args('userId', { type: () => Int }) userId: number,
    @Args('role', { type: () => String }) role: any,
  ) {
    return this.rolesService.assignRole(userId, role);
  }

  @Query(() => [])
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  async getUserRoles(@Args('userId', { type: () => Int }) userId: number) {
    return this.rolesService.getUserRoles(userId);
  }
}
