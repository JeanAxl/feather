import { Item } from '../item.entity';

export abstract class ItemRepositoryPort {
  public abstract delete(itemId: Item['id']): Promise<void>;
}
