import { BaseEntity } from 'src/base/entity/base.entity';
import { Column, Entity, Index, OneToMany } from 'typeorm';
import { BusinessReference } from './business-reference.entity';

@Entity()
export class Members extends BaseEntity {
  @Column({ nullable: false, type: 'citext' })
  chapterId: string;

  @Column({ nullable: false, type: 'citext' })
  city: string;

  @Column({ type: 'citext', nullable: true })
  invitedBy: string;

  @Column({ nullable: true, type: 'text' })
  heard_about_bni: string;

  @Column({ nullable: false, type: 'citext' })
  firstName: string;

  @Column({ nullable: false, type: 'citext' })
  lastName: string;

  @Column({ nullable: false, type: 'citext' })
  companyName: string;

  @Column({ nullable: true })
  industry: string;

  @Column({ nullable: false, type: 'citext' })
  businessAddress1: string;

  @Column({ nullable: false, type: 'citext' })
  businessAddress2: string;

  @Column({ nullable: false, type: 'citext' })
  businessCity: string;

  @Column({ nullable: false, type: 'citext' })
  businessState: string;

  @Column({ type: 'varchar', length: 10, nullable: false })
  businessPincode: string;

  @Index()
  @Column({ nullable: false, type: 'varchar' })
  email: string;

  @Column({ nullable: true })
  website: string;

  @Index()
  @Column({ type: 'varchar', nullable: false, length: 10 })
  contact_no: string;

  @Index()
  @Column({ type: 'varchar', nullable: false, length: 10 })
  secondary_contact_no: string;

  @Index()
  @Column({ type: 'varchar', length: 30, nullable: false })
  gstNumber: string;

  @Column({ default: true, type: 'boolean', nullable: true })
  bni_commitment_agreement: boolean;

  @Column({ default: true, type: 'boolean', nullable: true })
  substitute_commitment: boolean;

  @Column({ default: true, type: 'boolean', nullable: true })
  referral_commitment: boolean;

  @Column({ nullable: true, type: 'numeric' })
  referral_ability_rating: number;

  @Column({ default: false, type: 'boolean', nullable: true })
  previous_bni_membership: boolean;

  @Column({ default: false, type: 'boolean', nullable: true })
  other_networking_organizations: boolean;

  @Column({ default: false, type: 'boolean', nullable: true })
  isApproved: boolean;

  @OneToMany(
    () => BusinessReference,
    (businessReference) => businessReference.member,
    {
      cascade: ['insert', 'update', 'soft-remove'],
    },
  )
  businessReference: BusinessReference[];
}
