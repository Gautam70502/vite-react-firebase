import { Visitor } from 'src/visitor/entities/visitor.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Meeting } from 'src/meeting/entities/meeting.entity';
import { BaseEntity } from 'src/base/entity/base.entity';
import { ChapterCourse } from 'src/chapter-course/entities/chapter-course.entity';
import { ChapterUsers } from 'src/chapters_users/entities/chapters_users.entity';
import { UserFcmToken } from 'src/userfcmtoken/entities/userFcmToken.entity';
import { City } from 'src/city/entities/city.entity';

@Entity()
export class Chapter extends BaseEntity {
  @Column({ type: 'uuid', nullable: false })
  cityId: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  name: string;

  @OneToMany(() => Visitor, (visitor) => visitor.chapter, {
    cascade: ['insert', 'update', 'soft-remove'],
  })
  visitors: Visitor;

  @OneToMany(() => ChapterUsers, (chapterUsers) => chapterUsers.chapter, {
    cascade: ['insert', 'update', 'soft-remove'],
  })
  chapterUsers: ChapterUsers[];

  @OneToMany(() => Meeting, (meeting) => meeting.chapter, {
    cascade: ['insert', 'update', 'soft-remove'],
  })
  meetings: Meeting[];

  @OneToMany(() => ChapterCourse, (ChapterCourse) => ChapterCourse.chapter, {
    cascade: ['insert', 'update', 'soft-remove'],
  })
  chapterCourses: ChapterCourse[];

  @OneToMany(() => UserFcmToken, (UserFcmToken) => UserFcmToken.chapter, {
    cascade: ['insert', 'update', 'soft-remove'],
  })
  fcmTokens: UserFcmToken[];

  @ManyToOne(() => City, (city) => city.chapters)
  @JoinColumn({ name: 'city_id', referencedColumnName: 'id' })
  city: City;
}
