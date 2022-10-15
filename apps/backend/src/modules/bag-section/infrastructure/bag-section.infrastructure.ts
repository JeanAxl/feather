import { BagSectionRepositoryPort } from '../core/domain/ports/bag-section-repositopry.port';
import { ItemRepositoryPort } from '../core/domain/ports/item-repository.port';
import { BagSectionRepositoryAdapter } from './typeorm/bag-section/bag-section.repository-adapter';
import { ItemRepositoryAdapter } from './typeorm/item/item.repository-adapter';

export const bagSectionInfrastructure = {
  providers: [
    {
      provide: BagSectionRepositoryPort,
      useClass: BagSectionRepositoryAdapter,
    },
    {
      provide: ItemRepositoryPort,
      useClass: ItemRepositoryAdapter,
    },
  ],
};
