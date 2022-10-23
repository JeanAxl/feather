import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { BagSectionRepositoryPort } from '../../../domain/ports/bag-section-repositopry.port';
import {
  GetBagSectionsQuery,
  GetBagSectionsQueryResult,
} from './get-bag-sections.query';

@QueryHandler(GetBagSectionsQuery)
export class GetBagSectionsQueryHandler implements IQueryHandler {
  constructor(
    private readonly bagSectionRepository: BagSectionRepositoryPort
  ) {}

  public async execute(
    query: GetBagSectionsQuery
  ): Promise<GetBagSectionsQueryResult> {
    console.log(query);
    return this.bagSectionRepository.getBagSections();
  }
}
