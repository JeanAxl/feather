import { BagSectionRepositoryPort } from '../core/domain/ports/bag-section-repositopry.port';
import { BagSectionInMemoryRepository } from './bag-section.in-memory-repository';

export const bagSectionInfrastructure = {
  providers: [
    {
      provide: BagSectionRepositoryPort,
      useClass: BagSectionInMemoryRepository,
    },
  ],
};
