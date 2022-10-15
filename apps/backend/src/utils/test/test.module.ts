import { Module, ModuleMetadata } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemTypeOrmEntity } from '../../modules/bag-section/infrastructure/typeorm/item.typeorm-entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      dropSchema: true,
      entities: [ItemTypeOrmEntity],
      keepConnectionAlive: false,
    }),
  ],
})
class TestingModule {}

const testingModuleFactory = async (
  providers: ModuleMetadata['providers'],
  imports: ModuleMetadata['imports']
) => {
  const module = await Test.createTestingModule({
    providers: [...providers],
    imports: [TestingModule, ...imports],
  }).compile();

  return module;
};
