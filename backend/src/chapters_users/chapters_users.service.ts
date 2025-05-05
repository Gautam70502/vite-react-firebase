import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { ChapterUsers } from './entities/chapters_users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ChaptersUsersService extends BaseService<ChapterUsers> {
  constructor(
    @InjectRepository(ChapterUsers)
    public chaptersUsersRepository: Repository<ChapterUsers>,
  ) {
    super(chaptersUsersRepository, 'ChapterUsers');
  }
}
