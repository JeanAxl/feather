import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { QueryBus } from '@nestjs/cqrs';
import {
  GetBagSectionQuery,
  GetBagSectionQueryResult,
} from '../core/application/queries/get-bag-section/get-bag-section.query';

@Resolver('BagSection')
export class BagSectionResolver {
  constructor(private readonly queryBus: QueryBus) {}
  private bagSection = { name: 'Module bouffe' };
  @Query('bagSection')
  async getBagSection() {
    const result = await this.queryBus.execute<
      GetBagSectionQuery,
      GetBagSectionQueryResult
    >(new GetBagSectionQuery());
    return result;
  }

  @Mutation('updateBagSection')
  async updateBagSection() {
    this.bagSection.name = 'Some new name' + new Date().toString();
    return this.bagSection;
  }
}
