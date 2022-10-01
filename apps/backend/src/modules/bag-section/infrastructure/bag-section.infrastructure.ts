import { StoragePort } from '../core/domain/ports/storage.port';
import { StorageAdapter } from './storage.adapter';

export const bagSectionInfrastructure = {
  providers: [
    {
      provide: StoragePort,
      useClass: StorageAdapter,
    },
  ],
};
