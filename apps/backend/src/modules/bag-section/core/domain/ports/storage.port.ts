import { BagSection } from '../bag-section.entity';

export type UpdateBagSectionInput = Partial<BagSection>;
export abstract class StoragePort {
  public abstract getBagSection(): BagSection;
  public abstract updateBagSection(input: UpdateBagSectionInput): void;
}
