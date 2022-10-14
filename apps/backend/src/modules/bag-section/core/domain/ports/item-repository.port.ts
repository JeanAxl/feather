import { Item } from '../item.entity';

export interface ItemRepositoryPort {
  delete(itemId: Item['id']): Promise<void>;
}
