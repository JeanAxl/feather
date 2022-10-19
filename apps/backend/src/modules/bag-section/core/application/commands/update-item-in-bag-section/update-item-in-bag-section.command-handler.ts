import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ItemRepositoryPort } from '../../../domain/ports/item-repository.port';
import {
  UpdateItemInBagSectionCommand,
  UpdateItemInBagSectionCommandResult,
} from './update-item-in-bag-section.command';

@CommandHandler(UpdateItemInBagSectionCommand)
export class UpdateItemInBagSectionCommandHandler implements ICommandHandler {
  constructor(private readonly itemRepository: ItemRepositoryPort) {}

  public async execute({
    payload,
  }: UpdateItemInBagSectionCommand): Promise<UpdateItemInBagSectionCommandResult> {
    const { id, ...input } = payload;
    await this.itemRepository.updateItem(id, input);
  }
}
