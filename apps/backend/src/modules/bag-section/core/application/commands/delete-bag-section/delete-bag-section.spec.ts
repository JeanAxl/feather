import { TestingModule } from '@nestjs/testing';
import { DataSource } from 'typeorm';
import { testingModuleFactory } from '../../../../../../shared/test/test.module';
import { BagSectionModule } from '../../../../bag-section.module';
import { DeleteBagSectionCommandHandler } from './delete-bag-section.command-handler';
describe('DeleteBagSectionCommandHandler', () => {
  let handler: DeleteBagSectionCommandHandler;
  let dataSource: DataSource;
  let module: TestingModule;

  beforeAll(async () => {
    [module, dataSource] = await testingModuleFactory([BagSectionModule], []);
    handler = module.get(DeleteBagSectionCommandHandler);
  });

  afterAll(async () => {
    await dataSource.destroy();
  });
});
