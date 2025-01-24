import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup() {
    console.log('🔥 :: singup ::');
    return 'You are signed up!';
  }
  signin() {
    console.log('🔥 :: singup ::');
    return 'You are signed up';
  }
}
