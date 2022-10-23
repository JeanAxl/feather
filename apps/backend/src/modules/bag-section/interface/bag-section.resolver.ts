import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  AddItemInBagSectionInput,
  UpdateBagSectionInput,
  UpdateItemInBagSectionInput,
} from '../../../../graphql-generated-types';
import { GraphQLReturn } from '../../../../graphql-return.type';
import {
  AddItemInBagSectionCommand,
  AddItemInBagSectionCommandResult,
} from '../core/application/commands/add-item-in-bag-section/add-item-in-bag-section.command';
import {
  DeleteItemInBagSectionCommand,
  DeleteItemInBagSectionCommandResult,
} from '../core/application/commands/delete-item-in-bag-section/delete-item-in-bag-section.command';
import {
  UpdateBagSectionCommand,
  UpdateBagSectionCommandResult,
} from '../core/application/commands/update-bag-section/update-bag-section.command';
import {
  UpdateItemInBagSectionCommand,
  UpdateItemInBagSectionCommandResult,
} from '../core/application/commands/update-item-in-bag-section/update-item-in-bag-section.command';
import {
  GetBagSectionQuery,
  GetBagSectionQueryResult,
} from '../core/application/queries/get-bag-section/get-bag-section.query';

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
    return { ...result };
  }

  @Query()
  async bagSections(): Promise<GraphQLReturn<'bagSections'>> {
    const result = await this.queryBus.execute<
      GetBagSectionsQuery,
      GetBagSectionsQueryResult
    >(new GetBagSectionsQuery());
    return result;
  }

  @Mutation()
  async updateBagSection(
    @Args('input') input: UpdateBagSectionInput
  ): Promise<boolean> {
    await this.commandBus.execute<
      UpdateBagSectionCommand,
      UpdateBagSectionCommandResult
    >(new UpdateBagSectionCommand(input));

    return true;
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

  @Mutation()
  async addItemInBagSection(
    @Args('input') input: AddItemInBagSectionInput
  ): Promise<GraphQLReturn<'addItemInBagSection'>> {
    await this.commandBus.execute<
      AddItemInBagSectionCommand,
      AddItemInBagSectionCommandResult
    >(new AddItemInBagSectionCommand(input));

    return true;
  }

  @Mutation()
  async updateItemInBagSection(
    @Args('input') input: UpdateItemInBagSectionInput
  ): Promise<GraphQLReturn<'updateItemInBagSection'>> {
    await this.commandBus.execute<
      UpdateItemInBagSectionCommand,
      UpdateItemInBagSectionCommandResult
    >(new UpdateItemInBagSectionCommand(input));

    return true;
  }
}
