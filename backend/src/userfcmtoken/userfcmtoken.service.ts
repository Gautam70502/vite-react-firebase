import { Injectable } from '@nestjs/common';
import { UserFcmToken } from './entities/userFcmToken.entity';
import { BaseService } from 'src/base/base.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserfcmtokenService extends BaseService<UserFcmToken> {
  constructor(
    @InjectRepository(UserFcmToken)
    private readonly UserFcmTokenRepository: Repository<UserFcmToken>,
  ) {
    super(UserFcmTokenRepository, 'UserFcmToken');
  }
}
