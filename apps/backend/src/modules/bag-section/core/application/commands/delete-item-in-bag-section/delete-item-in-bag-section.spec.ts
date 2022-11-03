import { TestingModule } from '@nestjs/testing';
import { DataSource, Repository } from 'typeorm';
import { testingModuleFactory } from '../../../../../../shared/test/test.module';
import { BagSectionModule } from '../../../../bag-section.module';
import { ItemTypeOrmEntity } from '../../../../infrastructure/typeorm/item/item.typeorm-entity';
import { DeleteItemInBagSectionCommand } from './delete-item-in-bag-section.command';
import { DeleteItemInBagSectionCommandHandler } from './delete-item-in-bag-section.command-handler';
import { fixtures, itemId } from './fixtures';

describe('DeleteItemInBagSectionCommandHandler', () => {
  let commandHandler: DeleteItemInBagSectionCommandHandler;
  let itemRepository: Repository<ItemTypeOrmEntity>;
  let dataSource: DataSource;
  let module: TestingModule;

  beforeAll(async () => {
    [module, dataSource] = await testingModuleFactory(
      [BagSectionModule],
      fixtures
    );
    commandHandler = module.get(DeleteItemInBagSectionCommandHandler);
    itemRepository = dataSource.getRepository(ItemTypeOrmEntity);
  });

  afterAll(async () => {
    await dataSource.destroy();
  });

  it('should remove an item by id', async () => {
    const command = new DeleteItemInBagSectionCommand({
      itemId,
    });

    await commandHandler.execute(command);

    const items = await itemRepository.find();
    expect(items.find((item) => item.id === itemId)).toBeUndefined();
  });
});
