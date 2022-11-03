import { v4 as uuid } from 'uuid';
import { itemFixtureFactory } from '../../../../infrastructure/typeorm/item/item.fixture-factory';
import { ItemTypeOrmEntity } from '../../../../infrastructure/typeorm/item/item.typeorm-entity';
export const itemId = uuid();
export const fixtures = [
  {
    tableName: ItemTypeOrmEntity.name,
    items: [itemFixtureFactory({ id: itemId }), itemFixtureFactory({})],
  },
];
