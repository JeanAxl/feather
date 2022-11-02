import { faker } from '@faker-js/faker';
import { v4 as uuid } from 'uuid';
import { bagSectionFixtureFactory } from '../../../../infrastructure/typeorm/bag-section/bag-section.fixture-factory';
import { BagSectionTypeOrmEntity } from '../../../../infrastructure/typeorm/bag-section/bag-section.typeorm-entity';
import { itemFixtureFactory } from '../../../../infrastructure/typeorm/item/item.fixture-factory';
import { ItemTypeOrmEntity } from '../../../../infrastructure/typeorm/item/item.typeorm-entity';
import { AddItemInBagSectionCommandPayload } from './add-item-in-bag-section.command';
export const newBagSectionId = uuid();
export const fixtures = [
  {
    tableName: BagSectionTypeOrmEntity.name,
    items: [bagSectionFixtureFactory({ id: newBagSectionId })],
  },
  {
    tableName: ItemTypeOrmEntity.name,
    items: [
      itemFixtureFactory({ bagSectionId: newBagSectionId }),
      itemFixtureFactory({ bagSectionId: newBagSectionId }),
      itemFixtureFactory({ bagSectionId: newBagSectionId }),
    ],
  },
];

export const addItemInBagSectionCommandPayloadFactory = (
  input: Partial<AddItemInBagSectionCommandPayload>
): AddItemInBagSectionCommandPayload => {
  return {
    id: faker.datatype.uuid() as ItemTypeOrmEntity['id'],
    bagSectionId: faker.datatype.uuid(),
    name: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    quantity: faker.datatype.number(100),
    weight: faker.datatype.float({ min: 0.01, max: 1000, precision: 2 }),
    ...input,
  };
};
