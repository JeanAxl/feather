import { DataSource, Repository } from 'typeorm';
import { testingModuleFactory } from '../../../../../../utils/test/test.module';
import { BagSectionModule } from '../../../../bag-section.module';
import { ItemTypeOrmEntity } from '../../../../infrastructure/typeorm/item/item.typeorm-entity';
import { DeleteItemInBagSectionCommand } from './delete-item-in-bag-section.command';
import { DeleteItemInBagSectionCommandHandler } from './delete-item-in-bag-section.command-handler';
import { fixtures } from './fixtures';

describe('DeleteItemInBagSectionCommandHandler', () => {
  let commandHandler: DeleteItemInBagSectionCommandHandler;
  let itemRepository: Repository<ItemTypeOrmEntity>;
  beforeAll(async () => {
    const module = await testingModuleFactory([], [BagSectionModule], fixtures);
    const dataSource = module.get(DataSource);
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
