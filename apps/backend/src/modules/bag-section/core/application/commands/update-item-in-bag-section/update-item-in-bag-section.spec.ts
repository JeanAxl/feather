import { Repository } from 'typeorm';
import { testingModuleFactory } from '../../../../../../shared/test/test.module';
import { BagSectionModule } from '../../../../bag-section.module';
import { ItemTypeOrmEntity } from '../../../../infrastructure/typeorm/item/item.typeorm-entity';
import { fixtures } from './fixtures';
import { UpdateItemInBagSectionCommand } from './update-item-in-bag-section.command';
import { UpdateItemInBagSectionCommandHandler } from './update-item-in-bag-section.command-handler';
describe('UpdateItemInBagSectionCommandHandler', () => {
  let commandHandler: UpdateItemInBagSectionCommandHandler;
  let itemRepository: Repository<ItemTypeOrmEntity>;
  beforeAll(async () => {
    const [module, dataSource] = await testingModuleFactory(
      [BagSectionModule],
      fixtures
    );
    commandHandler = module.get(UpdateItemInBagSectionCommandHandler);
    itemRepository = dataSource.getRepository(ItemTypeOrmEntity);
  });

  it('should update an item', async () => {
    const command = new UpdateItemInBagSectionCommand({
      id: '1',
      name: 'newName',
      description: 'newDescription',
      weight: 20000,
      quantity: 42,
    });
    await commandHandler.execute(command);
    const updatedItem = await itemRepository.findOneOrFail({
      where: { id: '1' },
    });
    expect({ ...updatedItem }).toStrictEqual({
      id: '1',
      name: 'newName',
      description: 'newDescription',
      bagSectionId: '1',
      weight: 20000,
      quantity: 42,
    });
  });
});
