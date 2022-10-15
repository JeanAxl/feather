import { Module, ModuleMetadata } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QueryRunner } from 'typeorm';
import { ItemTypeOrmEntity } from '../../modules/bag-section/infrastructure/typeorm/item.typeorm-entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      dropSchema: true,
      entities: [ItemTypeOrmEntity],
      synchronize: true,
      keepConnectionAlive: false,
    }),
  ],
})
class TestingModule {}

export type Fixture = {
  tableName: string;
  items: any[];
};

export const loadFixtures = async (
  queryRunner: QueryRunner,
  fixtures: Fixture[]
): Promise<void> => {
  try {
    await queryRunner.startTransaction();
    for (const fixture of fixtures) {
      try {
        const repository = queryRunner.manager.getRepository(fixture.tableName);
        const entitiesToSave = repository.create(fixture.items);
        await queryRunner.manager.save(entitiesToSave);
      } catch (error) {
        console.log(error);
        throw new Error(
          `Error on loading fixture > Failed to load fixtures for entity "${
            fixture.tableName
          }" , "${JSON.stringify(fixture.items)}`
        );
      }
    }
    await queryRunner.commitTransaction();
  } catch (error) {
    await queryRunner.rollbackTransaction();
    throw new Error(`Failed to setup fixtures ! Got error: ${error}`);
  } finally {
    await queryRunner.release();
  }
};

export const testingModuleFactory = async (
  providers: ModuleMetadata['providers'],
  imports: ModuleMetadata['imports']
) => {
  const module = await Test.createTestingModule({
    providers: [...providers],
    imports: [TestingModule, ...imports],
  }).compile();

  return module;
};
