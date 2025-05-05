import {
  BadRequestException,
  Injectable,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersAuthDto } from './dto/create-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { JwtPaylod, Role } from './types/auth.types';
import * as bcrypt from 'bcrypt';
import { MailerService } from '@nestjs-modules/mailer';
import { Request } from 'express';
import { UserfcmtokenService } from 'src/userfcmtoken/userfcmtoken.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private mailService: MailerService,
    private userfcmService: UserfcmtokenService,
  ) {}

  async authenicate(UsersAuthDto: UsersAuthDto) {
    const { email, password, fcmToken } = UsersAuthDto;
    try {
      const existUser = await this.userService.findOne({ email }, [
        'chapterUsers',
      ]);

      if (
        !existUser ||
        (existUser.password &&
          !(await bcrypt.compare(password, existUser.password)))
      ) {
        throw new UnauthorizedException();
      }

      const payload: JwtPaylod = {
        id: existUser.id,
        email: existUser.email,
        role: existUser.role,
      };

      // if (fcmToken && existUser.chapterUsers && existUser.chapterUsers.length) {
      //   await Promise.all(
      //     existUser.chapterUsers.map(async (chapterUser) => {
      //       await this.userfcmService.create({
      //         fcmToken,
      //         userId: existUser.id,
      //         createdBy: existUser.id,
      //         chapterId: chapterUser.chapterId,
      //       });
      //       return;
      //     }),
      //   );
      // }

      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch {
      throw new UnauthorizedException('Invalid credentials');
    }
  }

  async forgetPassword(email: string) {
    try {
      const user = await this.userService.findOne({ email });

      if (!user) {
        throw new UnauthorizedException('User not found');
      }

      const payload: JwtPaylod = {
        id: user.id,
        email: user.email,
        role: user.role,
      };

      const token = await this.jwtService.signAsync(payload, {
        expiresIn: '10m',
      });

      const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;
      const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: email,
        subject: 'Reset Password',
        text: `Please visit ${resetUrl} to reset your password.`,
      };

      // await this.mailService.sendMail(mailOptions);

      return {
        status: true,
        message: 'Check your email for password reset instructions',
      };
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Failed to send email');
    }
  }

  async resetPassword(id: string, password: string, @Req() req: Request) {
    return await this.userService.update(
      id,
      {
        password: password,
      },
      req,
    );
  }

  async deleteUser(id: string, @Req() req: Request) {
    return await this.userService.delete(id, req);
  }
}
