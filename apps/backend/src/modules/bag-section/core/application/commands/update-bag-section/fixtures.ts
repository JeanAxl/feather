import { BagSectionTypeOrmEntity } from '../../../../infrastructure/typeorm/bag-section/bag-section.typeorm-entity';
import { ItemTypeOrmEntity } from '../../../../infrastructure/typeorm/item/item.typeorm-entity';

export const fixtures = [
  {
    tableName: BagSectionTypeOrmEntity.name,
    items: [
      {
        id: '1',
        name: 'Some test name',
        items: [
          {
            id: '1',
            name: 'new test name',
            description: 'test description',
            quantity: 2,
            weight: 42,
          },
        ],
      },
    ],
  },
  {
    tableName: ItemTypeOrmEntity.name,
    items: [
      {
        id: '1',
        bagSection: '1',
        name: 'new test name',
        description: 'test description',
        quantity: 2,
        weight: 42,
      },
    ],
  },
];
