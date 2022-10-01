import { BagSection } from '../bag-section.entity';

export abstract class StoragePort {
  public abstract getBagSection(): BagSection;
}
