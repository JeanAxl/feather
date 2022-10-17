import { Module, ModuleMetadata } from '@nestjs/common';
import { Test } from '@nestjs/testing';
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
  providers: ModuleMetadata['providers'] = [],
  imports: ModuleMetadata['imports'] = [],
  fixtures: Fixture[] = []
) => {
  const module = await Test.createTestingModule({
    providers: [...providers],
    imports: [TestingModule, ...imports],
  }).compile();

  const dataSource = module.get(DataSource);
  const queryRunner = dataSource.createQueryRunner();
  await loadFixtures(queryRunner, fixtures);

  return module;
};
