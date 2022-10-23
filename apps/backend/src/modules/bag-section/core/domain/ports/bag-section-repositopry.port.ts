import { BagSection } from '../bag-section.entity';

export type UpdateBagSectionInput = Partial<BagSection>;
export abstract class BagSectionRepositoryPort {
  public abstract getBagSection(
    id: BagSection['id']
  ): Promise<BagSection | null>;

  public abstract getBagSections(): Promise<BagSection[]>;

  public abstract updateBagSection(
    id: BagSection['id'],
    input: UpdateBagSectionInput
  ): Promise<void>;
}
