import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ItemRepositoryPort } from '../../../domain/ports/item-repository.port';
import {
  AddItemInBagSectionCommand,
  AddItemInBagSectionCommandResult,
} from './add-item-in-bag-section.command';

@CommandHandler(AddItemInBagSectionCommand)
export class AddItemInBagSectionCommandHandler implements ICommandHandler {
  constructor(private readonly itemRepository: ItemRepositoryPort) {}

  public async execute({
    payload,
  }: AddItemInBagSectionCommand): Promise<AddItemInBagSectionCommandResult> {
    await this.itemRepository.addItem(payload);
  }
}
