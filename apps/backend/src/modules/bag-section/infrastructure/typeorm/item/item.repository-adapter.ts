import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from '../../../core/domain/item.entity';
import {
  AddItemInput,
  ItemRepositoryPort,
  UpdateItemInput,
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

  public async updateItem(
    id: Item['id'],
    input: UpdateItemInput
  ): Promise<void> {
    await this.typeOrmRepository.update(id, input);
  }
}
