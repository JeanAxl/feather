import { BagSectionRepositoryPort } from '../core/domain/ports/bag-section-repositopry.port';
import { ItemRepositoryPort } from '../core/domain/ports/item-repository.port';
import { BagSectionInMemoryRepository } from './bag-section.in-memory-repository';
import { ItemInMemoryRepository } from './item.in-memory-repository';

export const bagSectionInfrastructure = {
  providers: [
    {
      provide: BagSectionRepositoryPort,
      useClass: BagSectionInMemoryRepository,
    },
    {
      provide: ItemRepositoryPort,
      useClass: ItemInMemoryRepository,
    },
  ],
};
