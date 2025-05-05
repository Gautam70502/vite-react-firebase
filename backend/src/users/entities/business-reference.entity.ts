import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Members } from './member.entity';

@Entity()
export class BusinessReference {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'citext' })
  firstName: string;

  @Column({ nullable: false, type: 'citext' })
  lastName: string;

  @Column({ nullable: false, type: 'citext' })
  businessName: string;

  @Index()
  @Column({ type: 'varchar', nullable: true, length: 10 })
  contact_no: string;

  @Index()
  @Column({ nullable: false, type: 'varchar' })
  email: string;

  @Column({ nullable: true, type: 'varchar' })
  business_relationship: string;

  @ManyToOne(() => Members, (members) => members.businessReference)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  member: Members;
}
