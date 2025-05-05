import { Module } from '@nestjs/common';
import { CeuService } from './ceu.service';
import { CeuController } from './ceu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ceu } from './entities/ceu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ceu])],
  controllers: [CeuController],
  providers: [CeuService],
})
export class CeuModule {}
