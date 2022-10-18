import { Item } from '../item.entity';

export type AddItemInput = NonNullable<Partial<Item>>;

export abstract class ItemRepositoryPort {
  public abstract deleteItem(itemId: Item['id']): Promise<void>;
  public abstract addItem(input: AddItemInput): Promise<void>;
}
