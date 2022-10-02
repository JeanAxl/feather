import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { BagSectionModule } from '../../../../bag-section.module';
import { UpdateBagSectionCommand } from './update-bag-section.command';
import { UpdateBagSectionCommandHandler } from './update-bag-section.command-handler';
describe('UpdateBagSectionCommandHandler', () => {
  let commandHandler: UpdateBagSectionCommandHandler;
  let application: INestApplication;
  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [BagSectionModule],
    }).compile();

    application = module.createNestApplication();
    await application.init();

    commandHandler = application.get(UpdateBagSectionCommandHandler);
  });

  it('should update the BagSection', async () => {
    const newBagSection = {
      name: 'Some test name',
      items: [
        {
          id: 'someId',
          name: 'new test name',
          description: 'test description',
          quantity: 2,
          weight: 42,
        },
      ],
    };
    const result = await commandHandler.execute(
      new UpdateBagSectionCommand(newBagSection)
    );
    expect(result).toStrictEqual({ bagSection: newBagSection });
  });
});
