import { BaseEntity } from 'src/base/entity/base.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Users } from '../../users/entities/user.entity';
import { Chapter } from 'src/chapter/entities/chapter.entity';

@Entity()
export class UserFcmToken extends BaseEntity {
  @Column({ nullable: false })
  fcmToken: string;

  @Index()
  @Column({ type: 'uuid', nullable: false })
  userId: string;

  @Index()
  @Column({ type: 'uuid', nullable: true })
  chapterId: string;

  @ManyToOne(() => Users, (users) => users.fcmTokens)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: Users;

  @ManyToOne(() => Chapter, (Chapter) => Chapter.fcmTokens)
  @JoinColumn({ name: 'chapter_id', referencedColumnName: 'id' })
  chapter: Chapter;
}
