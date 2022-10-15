import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BagSection } from '../../../core/domain/bag-section.entity';
import { BagSectionRepositoryPort } from '../../../core/domain/ports/bag-section-repositopry.port';
import { BagSectionTypeOrmEntity } from './bag-section.typeorm-entity';

@Injectable()
export class BagSectionRepositoryAdapter implements BagSectionRepositoryPort {
  constructor(
    @InjectRepository(BagSectionTypeOrmEntity)
    private typeOrmRepository: Repository<BagSectionTypeOrmEntity>
  ) {}

  public async getBagSection(id: BagSection['id']): Promise<BagSection | null> {
    return this.typeOrmRepository.findOneBy({ id });
  }

  public async updateBagSection(
    id: BagSection['id'],
    input: Partial<BagSection>
  ): Promise<void> {
    await this.typeOrmRepository.update(id, input);
  }
}
