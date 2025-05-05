import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { BaseEntity } from 'src/base/entity/base.entity';
import { Chapter } from 'src/chapter/entities/chapter.entity';
import { Ceu } from 'src/ceu/entities/ceu.entity';

@Entity()
export class ChapterCourse extends BaseEntity {
  @Index()
  @Column({ type: 'uuid', nullable: false })
  chapterId: string;

  @Column({ unique: true, nullable: false })
  title: string;

  @Column()
  credit: number;

  @ManyToOne(() => Chapter, (chapter) => chapter.chapterCourses)
  @JoinColumn({ name: 'chapter_id', referencedColumnName: 'id' })
  chapter: Chapter;

  @OneToMany(() => Ceu, (Ceu) => Ceu.ChapterCourse, {
    cascade: ['insert', 'update', 'soft-remove'],
  })
  ceus: Ceu[];
}
