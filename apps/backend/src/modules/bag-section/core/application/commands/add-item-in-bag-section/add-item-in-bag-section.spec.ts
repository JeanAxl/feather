import { v4 as uuid } from 'uuid';
import { VALIDATION_ERRORS } from '../../../../../../shared/error-handling/errors.constants';
import { testingModuleFactory } from '../../../../../../shared/test/test.module';
import { BagSectionModule } from '../../../../bag-section.module';
import { BagSectionRepositoryPort } from '../../../domain/ports/bag-section-repositopry.port';
import {
  AddItemInBagSectionCommand,
  AddItemInBagSectionCommandPayload,
} from './add-item-in-bag-section.command';
import { AddItemInBagSectionCommandHandler } from './add-item-in-bag-section.command-handler';
import { fixtures, newBagSectionId } from './fixtures';

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
      bagSectionId: newBagSectionId,
    });

    await commandHandler.execute(command);
    const bagSection = await bagSectionRepositoryAdapter.getBagSection(
      newBagSectionId
    );
    expect(bagSection?.items.find(({ id }) => id === newId)).toBeDefined();
  });
});

describe('AddItemInBagSectionCommand', () => {
  it('should throw an error when the id is not a valid uuid', () => {
    const payload: AddItemInBagSectionCommandPayload = {
      id: '',
      name: 'New item name',
      description: 'new item description',
      weight: 200,
      quantity: 2,
      bagSectionId: '1',
    };
    expect(() => new AddItemInBagSectionCommand(payload)).toThrowError(
      new Error(VALIDATION_ERRORS.INVALID)
    );
    payload.id = '21312';
    expect(() => new AddItemInBagSectionCommand(payload)).toThrowError(
      new Error(VALIDATION_ERRORS.INVALID)
    );
  });
});
