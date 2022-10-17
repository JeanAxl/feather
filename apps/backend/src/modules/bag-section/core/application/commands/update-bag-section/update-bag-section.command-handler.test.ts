import { Repository } from 'typeorm';
import { testingModuleFactory } from '../../../../../../utils/test/test.module';
import { BagSectionModule } from '../../../../bag-section.module';
import { BagSectionTypeOrmEntity } from '../../../../infrastructure/typeorm/bag-section/bag-section.typeorm-entity';
import { fixtures } from './fixtures';
import { UpdateBagSectionCommand } from './update-bag-section.command';
import { UpdateBagSectionCommandHandler } from './update-bag-section.command-handler';
describe('UpdateBagSectionCommandHandler', () => {
  let commandHandler: UpdateBagSectionCommandHandler;
  let bagSectionRepository: Repository<BagSectionTypeOrmEntity>;
  beforeAll(async () => {
    const [module, dataSource] = await testingModuleFactory(
      { imports: [BagSectionModule] },
      fixtures
    );
    commandHandler = module.get(UpdateBagSectionCommandHandler);
    bagSectionRepository = dataSource.getRepository(BagSectionTypeOrmEntity);
  });

  it('should update the BagSection', async () => {
    await commandHandler.execute(
      new UpdateBagSectionCommand({ id: '1', name: 'newName' })
    );

    const bagSection = await bagSectionRepository.findOneBy({ id: '1' });

    expect({ ...bagSection }).toStrictEqual({
      id: '1',
      name: 'newName',
    });
  });
});
