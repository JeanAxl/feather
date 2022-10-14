import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { BagSectionRepositoryPort } from '../../../domain/ports/bag-section-repositopry.port';
import {
  GetBagSectionQuery,
  GetBagSectionQueryResult,
} from './get-bag-section.query';

@QueryHandler(GetBagSectionQuery)
export class GetBagSectionQueryHandler implements IQueryHandler {
  constructor(
    private readonly bagSectionRepository: BagSectionRepositoryPort
  ) {}
  public async execute(): Promise<GetBagSectionQueryResult> {
    return this.bagSectionRepository.getBagSection();
  }
}
