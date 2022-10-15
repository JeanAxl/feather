import { BagSectionRepositoryPort } from '../core/domain/ports/bag-section-repositopry.port';
import { ItemRepositoryPort } from '../core/domain/ports/item-repository.port';
import { BagSectionInMemoryRepository } from './in-memory/bag-section.in-memory-repository';
import { ItemRepositoryAdapter } from './typeorm/item.repository-adapter';
import { ItemRepository } from './typeorm/item.typeorm-repository';

export const bagSectionInfrastructure = {
  providers: [
    ItemRepository,
    {
      provide: BagSectionRepositoryPort,
      useClass: BagSectionInMemoryRepository,
    },
    {
      provide: ItemRepositoryPort,
      useClass: ItemRepositoryAdapter,
    },
  ],
};
