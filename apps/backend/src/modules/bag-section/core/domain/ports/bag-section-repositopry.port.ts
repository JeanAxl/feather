import { BagSection } from '../bag-section.entity';

export type UpdateBagSectionInput = Partial<BagSection>;
export type AddBagSectionInput = NonNullable<Omit<BagSection, 'items'>>;
export type DeleteBagSectionInput = BagSection['id'];
export abstract class BagSectionRepositoryPort {
  public abstract getBagSection(
    id: BagSection['id']
  ): Promise<BagSection | null>;

  public abstract getBagSections(): Promise<BagSection[]>;

  public abstract updateBagSection(
    id: BagSection['id'],
    input: UpdateBagSectionInput
  ): Promise<void>;

  public abstract addBagSection(input: AddBagSectionInput): Promise<void>;
  public abstract delete(input: DeleteBagSectionInput): Promise<void>;
}
