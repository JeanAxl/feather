import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  commandHandlers,
  queryHandlers,
} from './core/application/bag-section.application';
import { bagSectionInfrastructure } from './infrastructure/bag-section.infrastructure';
import { ItemTypeOrmEntity } from './infrastructure/typeorm/item.typeorm-entity';
import { BagSectionResolver } from './interface/bag-section.resolver';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([ItemTypeOrmEntity])],
  providers: [
    BagSectionResolver,
    ...queryHandlers,
    ...commandHandlers,
    ...bagSectionInfrastructure.providers,
  ],
})
export class BagSectionModule {}
