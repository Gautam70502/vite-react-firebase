import { Users } from 'src/users/entities/user.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';

import { Meeting } from 'src/meeting/entities/meeting.entity';
import { BaseEntity } from 'src/base/entity/base.entity';
import { Attendance } from '../types/chapters-users-meeting.types';

@Entity()
export class ChaptersUsersMeeting extends BaseEntity {
  @Column({ type: 'enum', enum: Attendance })
  attendance: Attendance;

  @Column({ type: 'timestamptz', nullable: true })
  joinAt: Date;

  @Index()
  @Column({ type: 'uuid' })
  userId: string;

  @Index()
  @Column({ type: 'uuid' })
  meetingId: string;

  @ManyToOne(() => Users, (users) => users.ChaptersUsersMeeting)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: Users;

  @ManyToOne(() => Meeting, (Meeting) => Meeting.chapterMeetings)
  @JoinColumn({ name: 'meeting_id', referencedColumnName: 'id' })
  meeting: Meeting;
}
