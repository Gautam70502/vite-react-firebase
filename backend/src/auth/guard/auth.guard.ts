import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { JwtPaylod } from '../types/auth.types';
import { Users } from 'src/users/entities/user.entity';
import AppDataSource from 'src/config/db.config';
import { MemberShipStatus } from 'src/users/types/user.types';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();

    if (!request) {
      throw new UnauthorizedException();
    }

    const token: string | undefined = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const payload: JwtPaylod = await this.jwtService.verifyAsync(token, {
        secret: process.env.SECRET_KEY,
      });

      const user = await AppDataSource.getRepository(Users).findOne({
        where: {
          id: payload.id,
          membershipStatus: MemberShipStatus.ACTIVE,
        },
      });

      if (!user) {
        throw new UnauthorizedException();
      }

      if (payload) {
        request['user'] = user;
      }
    } catch (err) {
      console.log(err);
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
