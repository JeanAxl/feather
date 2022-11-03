import { itemFixtureFactory } from '../../../../infrastructure/typeorm/item/item.fixture-factory';
import { ItemTypeOrmEntity } from '../../../../infrastructure/typeorm/item/item.typeorm-entity';

export const fixtures = [
  {
    tableName: ItemTypeOrmEntity.name,
    items: [
      itemFixtureFactory({}),
      itemFixtureFactory({}),
      {
        id: 1,
        name: 'someName',
        description: 'someDescription',
        weight: 1,
        quantity: 1,
      },
      {
        id: '2',
        name: 'someName',
        description: 'someDescription',
        weight: 1,
        quantity: 1,
      },
    ],
  },
];
