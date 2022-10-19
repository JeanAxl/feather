import { Item } from '../item.entity';

export type AddItemInput = NonNullable<Partial<Item>>;
export type UpdateItemInput = NonNullable<
  Partial<Omit<Item, 'id' | 'bagSectionId'>>
>;
export abstract class ItemRepositoryPort {
  public abstract deleteItem(itemId: Item['id']): Promise<void>;
  public abstract addItem(input: AddItemInput): Promise<void>;
  public abstract updateItem(
    id: Item['id'],
    input: UpdateItemInput
  ): Promise<void>;
}
