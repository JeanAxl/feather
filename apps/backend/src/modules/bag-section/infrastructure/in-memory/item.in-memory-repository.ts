import { Item } from '../core/domain/item.entity';
import { ItemRepositoryPort } from '../core/domain/ports/item-repository.port';

export class ItemInMemoryRepository implements ItemRepositoryPort {
  private _items: Item[] = [];

  public async delete(itemId: string): Promise<void> {
    this._items = this._items.filter(({ id }) => id !== itemId);
  }

  feedWith(items: Item[]) {
    this._items = items;
  }

  get items(): Item[] {
    return this._items;
  }
}
