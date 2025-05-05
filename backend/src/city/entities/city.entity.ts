import { BaseEntity } from 'src/base/entity/base.entity';
import { Chapter } from 'src/chapter/entities/chapter.entity';
import { Region } from 'src/region/entities/region.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity('city')
export class City extends BaseEntity {
  @Column({ unique: true, type: 'varchar' })
  name: string;

  @Column({ nullable: false })
  regionId: string;

  @ManyToOne(() => Region, (region) => region.cities)
  @JoinColumn({ name: 'region_id', referencedColumnName: 'id' })
  region: Region;

  @OneToMany(() => Chapter, (chapter) => chapter.city, {
    cascade: ['insert', 'update', 'soft-remove'],
  })
  chapters: Chapter[];
}
