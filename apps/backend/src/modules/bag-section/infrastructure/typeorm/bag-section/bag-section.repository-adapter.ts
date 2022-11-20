import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BagSection } from '../../../core/domain/bag-section.entity';
import {
  AddBagSectionInput,
  BagSectionRepositoryPort,
  DeleteBagSectionInput,
} from '../../../core/domain/ports/bag-section-repositopry.port';
import { BagSectionTypeOrmEntity } from './bag-section.typeorm-entity';

@Injectable()
export class BagSectionRepositoryAdapter implements BagSectionRepositoryPort {
  constructor(
    @InjectRepository(BagSectionTypeOrmEntity)
    private typeOrmRepository: Repository<BagSectionTypeOrmEntity>
  ) {}

  public async getBagSection(id: BagSection['id']): Promise<BagSection | null> {
    return this.typeOrmRepository.findOne({
      where: { id },
      relations: ['items'],
    });
  }

  public async getBagSections(): Promise<BagSection[]> {
    const typeOrmEntities = await this.typeOrmRepository.find({
      relations: ['items', 'items.unit'],
    });

    return typeOrmEntities.map((typeOrmEntity) => ({
      ...typeOrmEntity,
      items: typeOrmEntity.items.map((itemTypeOrmEntity) => itemTypeOrmEntity),
    }));
  }

  public async updateBagSection(
    id: BagSection['id'],
    input: Partial<BagSection>
  ): Promise<void> {
    await this.typeOrmRepository.update(id, input);
  }

  public async addBagSection(input: AddBagSectionInput): Promise<void> {
    const bagSection = this.typeOrmRepository.create(input);
    await this.typeOrmRepository.save(bagSection);
  }
  public async delete(input: DeleteBagSectionInput): Promise<void> {
    await this.typeOrmRepository.delete(input);
  }
}
