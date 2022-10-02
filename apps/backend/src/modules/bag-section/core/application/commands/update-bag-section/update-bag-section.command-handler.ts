import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { StoragePort } from '../../../domain/ports/storage.port';
import {
  UpdateBagSectionCommand,
  UpdateBagSectionCommandResult,
} from './update-bag-section.command';

@CommandHandler(UpdateBagSectionCommand)
export class UpdateBagSectionCommandHandler implements ICommandHandler {
  constructor(private readonly storagePort: StoragePort) {}

  public async execute({
    payload,
  }: UpdateBagSectionCommand): Promise<UpdateBagSectionCommandResult> {
    this.storagePort.updateBagSection(payload);
    console.log(this.storagePort.getBagSection());
    console.log(payload);
    return { bagSection: this.storagePort.getBagSection() };
  }
}
