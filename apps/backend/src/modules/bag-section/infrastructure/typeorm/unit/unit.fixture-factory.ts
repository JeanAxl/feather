import { faker } from '@faker-js/faker';
import { UnitTypeOrmEntity } from './unit.typeorm-entity';

export const unitFixtureFactory = (
  input: Partial<UnitTypeOrmEntity>
): UnitTypeOrmEntity => {
  return Object.assign(new UnitTypeOrmEntity(), {
    id: faker.datatype.uuid() as UnitTypeOrmEntity['id'],
    label: faker.commerce.product(),
    name: faker.commerce.product(),
    multiplier: faker.datatype.float({ min: 0.0001, max: 1000000 }),
    ...input,
  });
};
