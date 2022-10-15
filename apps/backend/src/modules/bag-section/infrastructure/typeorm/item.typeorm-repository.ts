import { Repository } from 'typeorm';
import { ItemTypeOrmEntity } from './item.typeorm-entity';

export class ItemRepository extends Repository<ItemTypeOrmEntity> {}
