import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BagSectionTypeOrmEntity } from '../bag-section/bag-section.typeorm-entity';

@Entity()
export class ItemTypeOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  quantity: number;

  @Column()
  weight: number;

  @ManyToOne(() => BagSectionTypeOrmEntity)
  @JoinColumn()
  bagSection: BagSectionTypeOrmEntity;
}
