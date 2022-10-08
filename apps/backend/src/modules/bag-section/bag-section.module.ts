import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TrpcModule } from '../shared/trpc/trpc.module';
import {
  commandHandlers,
  queryHandlers,
} from './core/application/bag-section.application';
import { bagSectionInfrastructure } from './infrastructure/bag-section.infrastructure';
import { bagSectionInterfaces } from './interface/bag-section.interface';

@Module({
  imports: [TrpcModule, CqrsModule],
  providers: [
    ...bagSectionInterfaces,
    ...queryHandlers,
    ...commandHandlers,
    ...bagSectionInfrastructure.providers,
  ],
  exports: [...bagSectionInterfaces],
})
export class BagSectionModule {}
