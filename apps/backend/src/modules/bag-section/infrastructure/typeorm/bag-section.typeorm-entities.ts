import { BagSectionTypeOrmEntity } from './bag-section/bag-section.typeorm-entity';
import { ItemTypeOrmEntity } from './item/item.typeorm-entity';
import { UnitTypeOrmEntity } from './unit/unit.typeorm-entity';

export const bagSectionTypeOrmEntities = [
  ItemTypeOrmEntity,
  BagSectionTypeOrmEntity,
  UnitTypeOrmEntity,
];
