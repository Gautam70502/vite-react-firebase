import { BaseEntity } from 'src/base/entity/base.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { NotificationType } from '../types/notification.types';
import { Users } from 'src/users/entities/user.entity';

@Entity()
export class Notification extends BaseEntity {
  @Column({ type: 'citext', nullable: false })
  title: string;

  @Column({ nullable: false })
  message: string;

  @Column({ nullable: true })
  image: string;

  @Column({
    type: 'enum',
    enum: NotificationType,
    default: NotificationType.IMMEDIATE,
  })
  Type: NotificationType;

  @Column({ type: 'timestamptz', nullable: false })
  Date: Date;

  @Column({ type: 'boolean', default: false })
  isRead: boolean;

  @Index()
  @Column({ type: 'uuid', nullable: false })
  senderId: string;

  @Index()
  @Column({ type: 'uuid', nullable: false })
  receiverId: string;

  @ManyToOne(() => Users, (users) => users.notificationsSenders)
  @JoinColumn({ name: 'sender_id', referencedColumnName: 'id' })
  sender: Users;

  @ManyToOne(() => Users, (users) => users.notificationsReceivers)
  @JoinColumn({ name: 'receiver_id', referencedColumnName: 'id' })
  receiver: Users;
}
