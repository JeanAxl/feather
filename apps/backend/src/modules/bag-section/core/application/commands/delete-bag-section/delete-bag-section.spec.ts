import { TestingModule } from '@nestjs/testing';
import { DataSource, Repository } from 'typeorm';
import { testingModuleFactory } from '../../../../../../shared/test/test.module';
import { BagSectionModule } from '../../../../bag-section.module';
import { BagSectionTypeOrmEntity } from '../../../../infrastructure/typeorm/bag-section/bag-section.typeorm-entity';
import { DeleteBagSectionCommand } from './delete-bag-section.command';
import { DeleteBagSectionCommandHandler } from './delete-bag-section.command-handler';
import { bagSectionId, fixtures } from './fixtures';
describe('DeleteBagSectionCommandHandler', () => {
  let handler: DeleteBagSectionCommandHandler;
  let bagSectionRepository: Repository<BagSectionTypeOrmEntity>;
  let dataSource: DataSource;
  let module: TestingModule;

  beforeAll(async () => {
    [module, dataSource] = await testingModuleFactory(
      [BagSectionModule],
      fixtures
    );
    handler = module.get(DeleteBagSectionCommandHandler);
    bagSectionRepository = dataSource.getRepository(BagSectionTypeOrmEntity);
  });

  afterAll(async () => {
    await dataSource.destroy();
  });

  it('should delete a BagSection', async () => {
    const before = await bagSectionRepository.findOneBy({ id: bagSectionId });
    expect(before).not.toBeNull();
    const command = new DeleteBagSectionCommand({ id: bagSectionId });
    console.log(handler);
    await handler.execute(command);
    const result = await bagSectionRepository.findOneBy({ id: bagSectionId });
    expect(result).toBeNull();
  });
});
