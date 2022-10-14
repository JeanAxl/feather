import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ItemRepositoryPort } from '../../../domain/ports/item-repository.port';
import {
  DeleteItemInBagSectionCommand,
  DeleteItemInBagSectionCommandResult,
} from './delete-item-in-bag-section.command';

@CommandHandler(DeleteItemInBagSectionCommand)
export class DeleteItemInBagSectionCommandHandler implements ICommandHandler {
  constructor(private readonly itemRepository: ItemRepositoryPort) {}

  public async execute({
    payload,
  }: DeleteItemInBagSectionCommand): Promise<DeleteItemInBagSectionCommandResult> {
    const { itemId } = payload;
    await this.itemRepository.delete(itemId);
  }
}
