import { faker } from '@faker-js/faker';
import { BagSectionTypeOrmEntity } from './bag-section.typeorm-entity';

export const bagSectionFixtureFactory = (
  input: Partial<BagSectionTypeOrmEntity>
): BagSectionTypeOrmEntity => {
  return Object.assign(new BagSectionTypeOrmEntity(), {
    id: faker.datatype.uuid() as BagSectionTypeOrmEntity['id'],
    name: faker.commerce.product(),
    items: [],
    ...input,
  });
};
