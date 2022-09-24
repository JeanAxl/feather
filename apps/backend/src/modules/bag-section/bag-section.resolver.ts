import { Query, Resolver } from '@nestjs/graphql';

@Resolver('BagSection')
export class BagSectionResolver {
  @Query('bagSection')
  async getBagSection() {
    return {
      name: 'name',
    };
  }
}
