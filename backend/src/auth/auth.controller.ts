import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Req,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersAuthDto } from './dto/create-auth.dto';
import { UpdatePasswordDto } from './dto/update-auth.dto';
import { forgetAuthDto } from './dto/forget-auth.dto';
import { AuthGuard } from './guard/auth.guard';
import { responseInterceptor } from 'src/users/interceptor/api.interceptor';
import { Request } from 'express';
import { RoleGuard } from './guard/role.guard';
import { Roles } from './decorator/auth.roles';
import { Role } from './types/auth.types';
import { generatePDF, getUserId } from 'src/utils/helpers';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { MailerService } from '@nestjs-modules/mailer';
import * as fs from 'fs';
import { CreateMemberDto } from 'src/users/dto/create-member.dto';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
    private readonly mailService: MailerService,
  ) {}

  @Post('member-form')
  async create(@Body() createMemberDto: CreateMemberDto) {
    return await this.userService.createMember(createMemberDto);
    // const pdfPath = await generatePDF(createUserDto);

    // const mailOptions = {
    //   from: createUserDto.email,
    //   to: process.env.EMAIL_USERNAME,
    //   subject: 'New Register User Form',
    //   text: 'Please find the attached PDF with the user registration details.',
    //   attachments: [
    //     {
    //       filename: 'user_registration_form.pdf',
    //       path: pdfPath, // Path to the generated PDF
    //     },
    //   ],
    // };

    // await this.mailService.sendMail(mailOptions);

    // // Clean up the generated PDF after sending the email
    // fs.unlinkSync(pdfPath);

    // return {
    //   status: true,
    //   message: 'Check your email for password reset instructions',
    // };
  }

  @UseInterceptors(responseInterceptor)
  @Post('login')
  login(@Body() createAuthDto: UsersAuthDto) {
    console.log('createAuthDto : ', createAuthDto);
    return this.authService.authenicate(createAuthDto);
  }

  @Post('forget')
  forget(@Body() forgetAuthDto: forgetAuthDto) {
    return this.authService.forgetPassword(forgetAuthDto.email);
  }

  @UseGuards(AuthGuard)
  @Post('reset-password')
  resetPassword(@Body() updtaeAuthDto: UpdatePasswordDto, @Req() req: Request) {
    return this.authService.resetPassword(
      getUserId(req),
      updtaeAuthDto.password,
      req,
    );
  }

  @UseGuards(AuthGuard, RoleGuard)
  @Roles(Role.Admin)
  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: Request) {
    return this.authService.deleteUser(id, req);
  }
}
