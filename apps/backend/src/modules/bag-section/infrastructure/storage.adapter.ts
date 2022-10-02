import { BagSection } from '../core/domain/bag-section.entity';
import * as uuid from 'uuid';
import {
  StoragePort,
  UpdateBagSectionInput,
} from '../core/domain/ports/storage.port';

export class StorageAdapter implements StoragePort {
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
  public updateBagSection(input: UpdateBagSectionInput): void {
    this.bagSection = { ...this.bagSection, ...input };
  }
  public getBagSection(): BagSection {
    return this.bagSection;
  }
}
