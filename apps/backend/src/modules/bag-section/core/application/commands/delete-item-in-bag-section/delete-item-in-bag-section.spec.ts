import { DataSource, Repository } from 'typeorm';
import {
  loadFixtures,
  testingModuleFactory,
} from '../../../../../../utils/test/test.module';
import { BagSectionModule } from '../../../../bag-section.module';
import { ItemTypeOrmEntity } from '../../../../infrastructure/typeorm/item.typeorm-entity';
import { DeleteItemInBagSectionCommand } from './delete-item-in-bag-section.command';
import { DeleteItemInBagSectionCommandHandler } from './delete-item-in-bag-section.command-handler';

describe('DeleteItemInBagSectionCommandHandler', () => {
  let commandHandler: DeleteItemInBagSectionCommandHandler;
  let itemRepository: Repository<ItemTypeOrmEntity>;
  beforeEach(async () => {
    const module = await testingModuleFactory([], [BagSectionModule]);
    const dataSource = module.get(DataSource);
    const queryRunner = dataSource.createQueryRunner();
    await loadFixtures(queryRunner, [
      {
        tableName: 'ItemTypeOrmEntity',
        items: [
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
    ]);
    commandHandler = module.get(DeleteItemInBagSectionCommandHandler);
    itemRepository = dataSource.getRepository(ItemTypeOrmEntity);
  });

  it('should remove an item by id', async () => {
    const itemId = '2';
    const command = new DeleteItemInBagSectionCommand({
      itemId,
    });
    await commandHandler.execute(command);

    const items = await itemRepository.find();
    expect(items.find((item) => item.id === itemId)).toBeUndefined();
  });
});
