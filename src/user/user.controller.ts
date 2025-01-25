import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';

// @Controller('users')
// export class UserController {
//   @UseGuards(JwtGuard)
//   @Get('me')
//   getMe(@Req() req: Request) {
//     console.log('🔥 :: Req ::', req.user);
//     return req.user;
//   }
// }

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  // constructor(private userService: UserService) {}
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }

  // @Patch()
  // editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
  //   return this.userService.editUser(userId, dto);
  // }
}
