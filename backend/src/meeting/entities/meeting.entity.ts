import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { MeetingType } from '../types/meeting.types';
import { Chapter } from 'src/chapter/entities/chapter.entity';
import { BaseEntity } from 'src/base/entity/base.entity';
import { ChaptersUsersMeeting } from 'src/chapters-users-meeting/entities/chapters-users-meeting.entity';

@Entity()
export class Meeting extends BaseEntity {
  @Column({ type: 'citext' })
  name: string;

  @Column({ nullable: false, type: 'citext' })
  location: string;

  @Column({
    type: 'enum',
    enum: MeetingType,
    default: MeetingType.INPERSON,
  })
  meetingType: MeetingType;

  @Column({ type: 'timestamptz', nullable: false })
  meetingDate: Date;

  @Index()
  @Column({ type: 'uuid', nullable: false })
  chapterId: string;

  @ManyToOne(() => Chapter, (chapter) => chapter.meetings)
  @JoinColumn({ name: 'chapter_id', referencedColumnName: 'id' })
  chapter: Chapter;

  @OneToMany(
    () => ChaptersUsersMeeting,
    (ChaptersUsersMeeting) => ChaptersUsersMeeting.meeting,
    {
      cascade: ['insert', 'update', 'soft-remove'],
    },
  )
  chapterMeetings: ChaptersUsersMeeting[];
}
