import { TestingModule } from '@nestjs/testing';
import { DataSource, Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { testingModuleFactory } from '../../../../../../shared/test/test.module';
import { BagSectionModule } from '../../../../bag-section.module';
import { BagSectionTypeOrmEntity } from '../../../../infrastructure/typeorm/bag-section/bag-section.typeorm-entity';
import { AddBagSectionCommand } from './add-bag-section.command';
import { AddBagSectionCommandHandler } from './add-bag-section.command-handler';
describe('AddBagSectionCommandHandler', () => {
  let commandHandler: AddBagSectionCommandHandler;
  let bagSectionRepository: Repository<BagSectionTypeOrmEntity>;
  let dataSource: DataSource;
  let module: TestingModule;

  beforeAll(async () => {
    [module, dataSource] = await testingModuleFactory([BagSectionModule], []);
    commandHandler = module.get(AddBagSectionCommandHandler);
    bagSectionRepository = dataSource.getRepository(BagSectionTypeOrmEntity);
  });

  afterAll(async () => {
    await dataSource.destroy();
  });

  it('should add the BagSection', async () => {
    const newId = uuid();
    await commandHandler.execute(
      new AddBagSectionCommand({ id: newId, name: 'newName' })
    );

    const bagSection = await bagSectionRepository.findOneBy({
      id: newId,
    });

    expect({ ...bagSection }).toStrictEqual({
      id: newId,
      name: 'newName',
      items: undefined,
    });
  });
});
