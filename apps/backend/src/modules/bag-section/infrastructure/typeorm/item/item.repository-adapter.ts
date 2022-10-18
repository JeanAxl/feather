import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  AddItemInput,
  ItemRepositoryPort,
} from '../../../core/domain/ports/item-repository.port';
import { ItemTypeOrmEntity } from './item.typeorm-entity';

@Injectable()
export class ItemRepositoryAdapter implements ItemRepositoryPort {
  constructor(
    @InjectRepository(ItemTypeOrmEntity)
    private typeOrmRepository: Repository<ItemTypeOrmEntity>
  ) {}

  public async deleteItem(itemId: string): Promise<void> {
    this.typeOrmRepository.delete(itemId);
  }

  public async addItem(input: AddItemInput): Promise<void> {
    const item = await this.typeOrmRepository.create(input);
    await this.typeOrmRepository.save(item);
  }
}
