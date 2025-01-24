import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [JwtModule.register({})], //no referesh token is going be used
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
