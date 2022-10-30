import { testingModuleFactory } from '../../../../../../shared/test/test.module';
import { BagSectionModule } from '../../../../bag-section.module';
import { BagSectionRepositoryPort } from '../../../domain/ports/bag-section-repositopry.port';
import { AddItemInBagSectionCommand } from './add-item-in-bag-section.command';
import { AddItemInBagSectionCommandHandler } from './add-item-in-bag-section.command-handler';
import { fixtures } from './fixtures';

describe('AddItemInBagSectionCommandHandler', () => {
  let commandHandler: AddItemInBagSectionCommandHandler;
  let bagSectionRepositoryAdapter: BagSectionRepositoryPort;
  beforeAll(async () => {
    const [module] = await testingModuleFactory([BagSectionModule], fixtures);
    commandHandler = module.get(AddItemInBagSectionCommandHandler);
    bagSectionRepositoryAdapter = module.get(BagSectionRepositoryPort);
  });

  it('should add an Item to a BagSection', async () => {
    const command = new AddItemInBagSectionCommand({
      id: '4',
      name: 'New item name',
      description: 'new item description',
      weight: 200,
      quantity: 2,
      bagSectionId: '1',
    });

    await commandHandler.execute(command);
    const bagSection = await bagSectionRepositoryAdapter.getBagSection('1');
    expect(bagSection.items.find(({ id }) => id === '4')).toBeDefined();
  });
});
