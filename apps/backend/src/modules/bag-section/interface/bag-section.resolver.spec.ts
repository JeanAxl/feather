import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { testingModuleFactory } from '../../../shared/test/test.module';
import { BagSectionModule } from '../bag-section.module';
import { ItemTypeOrmEntity } from '../infrastructure/typeorm/item/item.typeorm-entity';
import { bagSection, bagSectionId, fixtures, item } from './fixtures';

describe('BagSectionResolver', () => {
  let app: INestApplication;
  let itemRepository: Repository<ItemTypeOrmEntity>;
  beforeAll(async () => {
    const [module, dataSource] = await testingModuleFactory(
      [BagSectionModule],
      fixtures,
      true
    );
    app = module.createNestApplication();
    itemRepository = dataSource.getRepository(ItemTypeOrmEntity);
    await app.init();
  });

  afterAll(async () => await app.close());
  describe('bagSection query', () => {
    it('should return a BagSection', async () => {
      const { body } = await request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: `
          query { bagSection(id: "${bagSectionId}") {
            id
            name
            items {
              id
              name
              description
              quantity
              weight
              bagSectionId
            }
          }
        }`,
        });
      expect(body?.data?.bagSection).toStrictEqual({
        id: bagSection.id,
        name: bagSection.name,
        items: [item.toObject()],
      });
    });
  });

  describe('addItemInBagSection mutation', () => {
    it('should add an Item in a BagSection', async () => {
      const newItemId = uuid();
      const input = {
        id: newItemId,
        name: 'name',
        description: 'description',
        weight: 1.2,
        quantity: 1,
        bagSectionId,
      };
      const { body } = await request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: `
          mutation { addItemInBagSection(input : { id: "${input.id}", name: "${input.name}", weight: ${input.weight}, quantity: 1, description: "${input.description}", bagSectionId: "${bagSectionId}"}) }`,
        });
      expect(body?.data?.addItemInBagSection).toStrictEqual(true);
      const createdItem = await itemRepository.findOneOrFail({
        where: { id: newItemId },
      });
      expect(createdItem.toObject()).toStrictEqual(input);
    });
  });
});
