import { Module } from '@nestjs/common';
import { GainedbioService } from './gainedbio.service';
import { GainedbioController } from './gainedbio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GainedBio } from './entities/gainedbio.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([GainedBio]), UsersModule],
  controllers: [GainedbioController],
  providers: [GainedbioService],
  exports: [GainedbioService],
})
export class GainedbioModule {}
