import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Notification } from './entities/notification.entity';
import { Repository } from 'typeorm';
import { BaseService } from 'src/base/base.service';

@Injectable()
export class NotificationService extends BaseService<Notification> {
  constructor(
    private firebaseService: FirebaseService,
    @InjectRepository(Notification)
    public notificationRepository: Repository<Notification>,
  ) {
    super(notificationRepository, 'notification');
  }
  async notifyUser(deviceToken: string, title: string, body: string) {
    return this.firebaseService.sendNotification(deviceToken, title, body);
  }
}
