import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  commandHandlers,
  queryHandlers,
} from './core/application/bag-section.application';
import { bagSectionInfrastructure } from './infrastructure/bag-section.infrastructure';
import { bagSectionTypeOrmEntities } from './infrastructure/typeorm/bag-section.typeorm-entities';
import { BagSectionResolver } from './interface/bag-section.resolver';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature(bagSectionTypeOrmEntities)],
  providers: [
    BagSectionResolver,
    ...queryHandlers,
    ...commandHandlers,
    ...bagSectionInfrastructure.providers,
  ],
})
export class BagSectionModule {}
