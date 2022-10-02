import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import {
  commandHandlers,
  queryHandlers,
} from './core/application/bag-section.application';
import { bagSectionInfrastructure } from './infrastructure/bag-section.infrastructure';
import { BagSectionResolver } from './interface/bag-section.resolver';

@Module({
  imports: [CqrsModule],
  providers: [
    BagSectionResolver,
    ...queryHandlers,
    ...commandHandlers,
    ...bagSectionInfrastructure.providers,
  ],
})
export class BagSectionModule {}
