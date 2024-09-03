import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthResponse } from './dto/auth-response';
import { UserInput } from './dto/user-input';
// import { Role } from '@prisma/client';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthResponse)
  async login(@Args('userInput') userInput: UserInput) {
    const user = await this.authService.validateUser(
      userInput.email,
      userInput.password,
    );
    if (!user) {
      throw new Error('Invalid credentials');
    }
    return this.authService.login(user);
  }

  @Mutation(() => AuthResponse)
  async signup(
    @Args('userInput') userInput: UserInput,
    @Args('role') role: any,
  ) {
    const user = await this.authService.signup(
      userInput.email,
      userInput.password,
      role,
    );
    return this.authService.login(user);
  }
}
