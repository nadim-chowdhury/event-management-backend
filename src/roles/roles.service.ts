import { Injectable } from '@nestjs/common';
// import { Role } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RolesService {
  constructor(private readonly prisma: any) {}

  async assignRole(userId: number, role: any): Promise<boolean> {
    await this.prisma.user.update({
      where: { id: userId },
      data: {
        role,
      },
    });
    return true;
  }

  async getUserRoles(userId: number): Promise<any[]> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        role: true,
      },
    });
    return user ? [user.role] : [];
  }
}
