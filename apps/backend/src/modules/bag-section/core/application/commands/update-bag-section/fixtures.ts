import { v4 as uuid } from 'uuid';
import { bagSectionFixtureFactory } from '../../../../infrastructure/typeorm/bag-section/bag-section.fixture-factory';
import { BagSectionTypeOrmEntity } from '../../../../infrastructure/typeorm/bag-section/bag-section.typeorm-entity';
export const bagSectionIdOne = uuid();
export const fixtures = [
  {
    tableName: BagSectionTypeOrmEntity.name,

    items: [bagSectionFixtureFactory({ id: bagSectionIdOne })],
  },
];
