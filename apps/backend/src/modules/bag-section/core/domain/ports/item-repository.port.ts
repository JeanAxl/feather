import { Item } from '../item.entity';

export abstract class ItemRepositoryPort {
  public abstract deleteItem(itemId: Item['id']): Promise<void>;
}
