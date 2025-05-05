import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contacts } from './entity/contact.entity';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { UsersModule } from 'src/users/users.module';
@Module({
  imports: [TypeOrmModule.forFeature([Contacts]), UsersModule],
  providers: [ContactService],
  exports: [ContactService],
  controllers: [ContactController],
})
export class ContactsModule {}
