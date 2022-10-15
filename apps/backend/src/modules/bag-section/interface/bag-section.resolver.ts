import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
  GetBagSectionQuery,
  GetBagSectionQueryResult,
} from '../core/application/queries/get-bag-section/get-bag-section.query';
import { UpdateBagSectionInput } from '../../../../graphql-generated-types';
import {
  UpdateBagSectionCommand,
  UpdateBagSectionCommandResult,
} from '../core/application/commands/update-bag-section/update-bag-section.command';
import { GraphQLReturn } from '../../../../graphql-return.type';
import {
  DeleteItemInBagSectionCommand,
  DeleteItemInBagSectionCommandResult,
} from '../core/application/commands/delete-item-in-bag-section/delete-item-in-bag-section.command';

@Resolver('BagSection')
export class BagSectionResolver {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus
  ) {}

  @Query()
  async bagSection(
    @Args('id') id: string
  ): Promise<GraphQLReturn<'bagSection'>> {
    const result = await this.queryBus.execute<
      GetBagSectionQuery,
      GetBagSectionQueryResult
    >(new GetBagSectionQuery({ id }));
    return result;
  }

  @Mutation('updateBagSection')
  async updateBagSection(
    @Args('input') input: UpdateBagSectionInput
  ): Promise<GraphQLReturn<'updateBagSection'>> {
    const result = await this.commandBus.execute<
      UpdateBagSectionCommand,
      UpdateBagSectionCommandResult
    >(new UpdateBagSectionCommand(input));

    return result.bagSection;
  }

  @Mutation('deleteItemInBagSection')
  async deleteItemInBagSection(
    @Args('itemId') itemId: string
  ): Promise<GraphQLReturn<'deleteItemInBagSection'>> {
    await this.commandBus.execute<
      DeleteItemInBagSectionCommand,
      DeleteItemInBagSectionCommandResult
    >(new DeleteItemInBagSectionCommand({ itemId }));

    return true;
  }
}
