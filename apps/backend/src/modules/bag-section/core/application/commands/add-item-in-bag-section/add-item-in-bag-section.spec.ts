import { v4 as uuid } from 'uuid';
import { VALIDATION_ERRORS } from '../../../../../../shared/error-handling/errors.constants';
import { testingModuleFactory } from '../../../../../../shared/test/test.module';
import { BagSectionModule } from '../../../../bag-section.module';
import { BagSectionRepositoryPort } from '../../../domain/ports/bag-section-repositopry.port';
import { AddItemInBagSectionCommand } from './add-item-in-bag-section.command';
import { AddItemInBagSectionCommandHandler } from './add-item-in-bag-section.command-handler';
import {
  addItemInBagSectionCommandPayloadFactory,
  fixtures,
  newBagSectionId,
} from './fixtures';

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
    const command = new AddItemInBagSectionCommand(
      addItemInBagSectionCommandPayloadFactory({
        id: newId,
        bagSectionId: newBagSectionId,
      })
    );

    await commandHandler.execute(command);
    const bagSection = await bagSectionRepositoryAdapter.getBagSection(
      newBagSectionId
    );
    expect(bagSection?.items.find(({ id }) => id === newId)).toBeDefined();
  });
});

describe('AddItemInBagSectionCommand', () => {
  it.each`
    describe                                         | payload                                                          | error
    ${'INVALID error when id is empty'}              | ${addItemInBagSectionCommandPayloadFactory({ id: '' })}          | ${new Error(VALIDATION_ERRORS.INVALID)}
    ${'INVALID error when id is not well formatted'} | ${addItemInBagSectionCommandPayloadFactory({ id: '23940-sdf' })} | ${new Error(VALIDATION_ERRORS.INVALID)}
    ${'NUMBER.NEGATIVE when weight is negative'}     | ${addItemInBagSectionCommandPayloadFactory({ weight: -3 })}      | ${new Error(VALIDATION_ERRORS.NUMBER.NEGATIVE)}
    ${'NUMBER.NEGATIVE when quanity is negative'}    | ${addItemInBagSectionCommandPayloadFactory({ quantity: -3 })}    | ${new Error(VALIDATION_ERRORS.NUMBER.NEGATIVE)}
  `('it should throw $describe', ({ payload, error }) => {
    expect(
      expect(() => new AddItemInBagSectionCommand(payload)).toThrowError(error)
    );
  });
});
