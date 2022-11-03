import { TestingModule } from '@nestjs/testing';
import { DataSource, Repository } from 'typeorm';
import { testingModuleFactory } from '../../../../../../shared/test/test.module';
import { BagSectionModule } from '../../../../bag-section.module';
import { BagSectionTypeOrmEntity } from '../../../../infrastructure/typeorm/bag-section/bag-section.typeorm-entity';
import { bagSectionIdOne, fixtures } from './fixtures';
import { UpdateBagSectionCommand } from './update-bag-section.command';
import { UpdateBagSectionCommandHandler } from './update-bag-section.command-handler';

describe('UpdateBagSectionCommandHandler', () => {
  let commandHandler: UpdateBagSectionCommandHandler;
  let bagSectionRepository: Repository<BagSectionTypeOrmEntity>;
  let dataSource: DataSource;
  let module: TestingModule;

  beforeAll(async () => {
    [module, dataSource] = await testingModuleFactory(
      [BagSectionModule],
      fixtures
    );
    commandHandler = module.get(UpdateBagSectionCommandHandler);
    bagSectionRepository = dataSource.getRepository(BagSectionTypeOrmEntity);
  });

  afterAll(async () => {
    await dataSource.destroy();
  });

  it('should update the BagSection', async () => {
    await commandHandler.execute(
      new UpdateBagSectionCommand({ id: bagSectionIdOne, name: 'newName' })
    );

    const bagSection = await bagSectionRepository.findOneBy({
      id: bagSectionIdOne,
    });

    expect({ ...bagSection }).toStrictEqual({
      id: bagSectionIdOne,
      name: 'newName',
      items: undefined,
    });
  });
});
