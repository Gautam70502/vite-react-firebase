import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { VisitorType } from '../types/visitor.types';
import { Chapter } from 'src/chapter/entities/chapter.entity';
import { Users } from 'src/users/entities/user.entity';
import { BaseEntity } from 'src/base/entity/base.entity';

@Entity()
export class Visitor extends BaseEntity {
  @Index()
  @Column('uuid')
  registerBy: string;

  @Column({ type: 'citext', nullable: false })
  title: string;

  @Column({ type: 'citext', nullable: false })
  firstName: string;

  @Column({ type: 'citext', nullable: false })
  lastName: string;

  @Column({ type: 'varchar', length: 50, nullable: false, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 10, nullable: false, unique: true })
  phone: string;

  @Column({ nullable: true, type: 'citext' })
  address: string;

  @Column({ type: 'citext', nullable: true })
  companyName: string;

  @Column({ type: 'enum', enum: VisitorType, default: VisitorType.VISITOR })
  visitorType: VisitorType;

  @Column()
  industry: string;

  @Index()
  @Column('uuid')
  chapterId: string;

  @ManyToOne(() => Chapter, (chapter) => chapter.visitors)
  @JoinColumn({ name: 'chapter_id' })
  chapter: Chapter;

  @ManyToOne(() => Users, (users) => users.visitors)
  @JoinColumn({ name: 'register_by' })
  user: Users;
}
