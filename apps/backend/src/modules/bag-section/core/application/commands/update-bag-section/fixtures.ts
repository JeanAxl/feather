import { BagSectionTypeOrmEntity } from '../../../../infrastructure/typeorm/bag-section/bag-section.typeorm-entity';
import { ItemTypeOrmEntity } from '../../../../infrastructure/typeorm/item/item.typeorm-entity';

export const fixtures = [
  {
    tableName: BagSectionTypeOrmEntity.name,
    items: [
      {
        id: '1',
        name: 'Some test name',
      },
    ],
  },
  {
    tableName: ItemTypeOrmEntity.name,
    items: [
      {
        id: '1',
        description: 'MSR - Hubba Hubba NX',
        name: 'Tente 2 places',
        quantity: 1,
        weight: 1,
        bagSectionId: '1',
      },
      {
        id: '2',
        description: 'MSR - Universal footprint',
        name: 'Footprint',
        quantity: 1,
        weight: 1.9,
        bagSectionId: '1',
      },
      {
        id: '3',
        description: 'Thermarest - Z Lite',
        name: 'Tapis de sol',
        quantity: 1,
        weight: 1,
        bagSectionId: '1',
      },
    ],
  },
];
