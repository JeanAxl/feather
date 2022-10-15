import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
