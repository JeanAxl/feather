import { BagSection } from '../bag-section.entity';

export type UpdateBagSectionInput = Partial<BagSection>;
export abstract class BagSectionRepositoryPort {
  public abstract getBagSection(): Promise<BagSection>;
  public abstract updateBagSection(input: UpdateBagSectionInput): Promise<void>;
}
