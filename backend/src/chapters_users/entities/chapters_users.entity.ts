import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { ChapterRole } from '../types/chaptesr_users.types';
import { Users } from 'src/users/entities/user.entity';
import { BaseEntity } from 'src/base/entity/base.entity';
import { Chapter } from 'src/chapter/entities/chapter.entity';

@Entity()
export class ChapterUsers extends BaseEntity {
  @Index()
  @Column({ type: 'uuid', nullable: false })
  chapterId: string;

  @Index()
  @Column({ type: 'uuid', nullable: false })
  userId: string;

  @Column({
    type: 'enum',
    enum: ChapterRole,
    default: ChapterRole.CHAPTERMEMBER,
    nullable: false,
  })
  chapterRole: ChapterRole;

  @ManyToOne(() => Users, (users) => users.chapterUsers, {
    onDelete: 'CASCADE',
    nullable: false,
    // eager: true,
  })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: Users;

  @ManyToOne(() => Chapter, (chapter) => chapter.chapterUsers, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'chapter_id', referencedColumnName: 'id' })
  chapter: Chapter;
}
