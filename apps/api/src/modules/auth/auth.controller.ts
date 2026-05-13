import { Body, Controller, Post } from '@nestjs/common';
import { IsEmail, IsEnum, IsString, MinLength } from 'class-validator';

enum UserRole { PASSENGER='PASSENGER', DRIVER='DRIVER', ADMIN='ADMIN', SUPPORT='SUPPORT' }
class RegisterDto {
  @IsEmail() email!: string;
  @IsString() @MinLength(8) password!: string;
  @IsString() fullName!: string;
  @IsEnum(UserRole) role!: UserRole;
}

@Controller('auth')
export class AuthController {
  @Post('register')
  register(@Body() dto: RegisterDto) {
    return { message: 'User registered (stub)', user: { ...dto, password: undefined } };
  }

  @Post('login')
  login() {
    return { accessToken: 'jwt_stub', refreshToken: 'refresh_stub' };
  }
}
