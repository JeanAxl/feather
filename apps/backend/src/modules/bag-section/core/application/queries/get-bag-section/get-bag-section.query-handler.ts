import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { BagSection } from '../../../domain/bag-section.entity';
import { StoragePort } from '../../../domain/ports/storage.port';
import { GetBagSectionQuery } from './get-bag-section.query';

@QueryHandler(GetBagSectionQuery)
export class GetBagSectionQueryHandler implements IQueryHandler {
  constructor(private readonly storagePort: StoragePort) {}
  public async execute(query: GetBagSectionQuery): Promise<BagSection> {
    console.log(query);
    return this.storagePort.getBagSection();
  }
}
