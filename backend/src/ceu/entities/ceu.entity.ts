import { BaseEntity } from 'src/base/entity/base.entity';
import { ChapterCourse } from 'src/chapter-course/entities/chapter-course.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Ceu extends BaseEntity {
  @Index()
  @Column({ type: 'uuid', nullable: false })
  chapterCourseId: string;

  @Index()
  @Column({ type: 'uuid', nullable: false })
  userId: string;

  @Column({ default: 0 })
  quantityEarned: number;

  @ManyToOne(() => ChapterCourse, (ChapterCourse) => ChapterCourse.ceus)
  @JoinColumn({ name: 'chapter_course_id', referencedColumnName: 'id' })
  ChapterCourse: ChapterCourse;

  @ManyToOne(() => Users, (users) => users.ceus)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: Users;
}
