import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    console.log('🔥 :: singup ::');
    return 'You are signed up';
  }
  signin() {
    console.log('🔥 :: singup ::');
    return 'You are signed up';
  }
}
