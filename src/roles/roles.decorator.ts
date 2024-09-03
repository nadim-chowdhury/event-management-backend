import { SetMetadata } from '@nestjs/common';
import { RolesGuard } from './roles.guard';
// import { Role } from '@prisma/client';

export const Roles = (...roles: RolesGuard[]) => SetMetadata('roles', roles);
