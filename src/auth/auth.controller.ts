import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}

  @Post('signup')
  singup(@Body() dto: AuthDto) {
    return this.AuthService.signup(dto);
  }

  @Post('signin')
  signin() {
    return this.AuthService.signin();
  }
}
