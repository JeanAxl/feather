import { v4 as uuid } from 'uuid';
import { VALIDATION_ERRORS } from '../../../../../../shared/error-handling/errors.constants';
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
    const newId = uuid();
    const command = new AddItemInBagSectionCommand({
      id: newId,
      name: 'New item name',
      description: 'new item description',
      weight: 200,
      quantity: 2,
      bagSectionId: '1',
    });

    await commandHandler.execute(command);
    const bagSection = await bagSectionRepositoryAdapter.getBagSection('1');
    expect(bagSection?.items.find(({ id }) => id === newId)).toBeDefined();
  });
});

describe('AddItemInBagSectionCommand', () => {
  it('should throw an error when the id is not a valid uuid', () => {
    expect(() => new AddItemInBagSectionCommand({ id: '' })).toThrowError(
      new Error(VALIDATION_ERRORS.INVALID)
    );
    expect(
      () => new AddItemInBagSectionCommand({ id: 'sdjfkh-123' })
    ).toThrowError(new Error(VALIDATION_ERRORS.INVALID));
  });
});
