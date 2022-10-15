import { ItemRepositoryPort } from '../../core/domain/ports/item-repository.port';
import { ItemRepository } from './item.typeorm-repository';

export class ItemRepositoryAdapter implements ItemRepositoryPort {
  constructor(private readonly typeOrmRepository: ItemRepository) {}
  public async delete(itemId: string): Promise<void> {
    await this.typeOrmRepository.delete(itemId);
  }
}
