import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { BagSectionRepositoryPort } from '../../../domain/ports/bag-section-repositopry.port';

import {
  DeleteBagSectionCommand,
  DeleteBagSectionCommandResult,
} from './delete-bag-section.command';

@CommandHandler(DeleteBagSectionCommand)
export class DeleteBagSectionCommandHandler implements ICommandHandler {
  constructor(
    private readonly bagSectionRepository: BagSectionRepositoryPort
  ) {}

  public async execute({
    payload,
  }: DeleteBagSectionCommand): Promise<DeleteBagSectionCommandResult> {
    await this.bagSectionRepository.delete(payload.id);
  }
}
