import { BagSection } from '../core/domain/bag-section.entity';
import * as uuid from 'uuid';
import { StoragePort } from '../core/domain/ports/storage.port';

export class StorageAdapter implements StoragePort {
  public getBagSection(): BagSection {
    return {
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
  }
}
