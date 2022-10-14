import { BagSection } from '../core/domain/bag-section.entity';
import * as uuid from 'uuid';
import {
  BagSectionRepositoryPort,
  UpdateBagSectionInput,
} from '../core/domain/ports/bag-section-repositopry.port';

export class BagSectionInMemoryRepository implements BagSectionRepositoryPort {
  private bagSection = {
    name: 'Bouffe module',
    items: [
      {
        id: uuid.v4(),
        name: 'réchaud',
        description: 'ca chauffe',
        quantity: 1,
        weight: 2,
      },
    ],
  };
  public async updateBagSection(input: UpdateBagSectionInput): Promise<void> {
    this.bagSection = { ...this.bagSection, ...input };
  }
  public async getBagSection(): Promise<BagSection> {
    return this.bagSection;
  }
}
