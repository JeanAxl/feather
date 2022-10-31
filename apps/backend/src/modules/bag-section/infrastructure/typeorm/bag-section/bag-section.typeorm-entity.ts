import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ItemTypeOrmEntity } from '../item/item.typeorm-entity';

@Entity()
export class BagSectionTypeOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @OneToMany(() => ItemTypeOrmEntity, (item) => item.bagSection)
  items!: ItemTypeOrmEntity[];
}
