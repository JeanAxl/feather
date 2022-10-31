import { Module, ModuleMetadata } from '@nestjs/common';
import { Test, TestingModule as NestNestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { appTypeOrmEntities } from '../../modules/app/infrastructure/typeorm/app.typeorm-entities';
import { Fixture, loadFixtures } from './fixtures.utils';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':test:',
      dropSchema: true,
      entities: appTypeOrmEntities,
      synchronize: true,
      keepConnectionAlive: false,
    }),
  ],
})
class TestingModule {}

export const testingModuleFactory = async (
  imports: ModuleMetadata['imports'],
  fixtures: Fixture[] = []
): Promise<[NestNestingModule, DataSource]> => {
  const importsArray = imports ? [...imports] : [];
  const module = await Test.createTestingModule({
    imports: [TestingModule, ...importsArray],
  }).compile();

  const dataSource = module.get(DataSource);
  const queryRunner = dataSource.createQueryRunner();
  await loadFixtures(queryRunner, fixtures);

  return [module, dataSource];
};
