import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { BagSectionRepositoryPort } from '../../../domain/ports/bag-section-repositopry.port';
import {
  UpdateBagSectionCommand,
  UpdateBagSectionCommandResult,
} from './update-bag-section.command';

@CommandHandler(UpdateBagSectionCommand)
export class UpdateBagSectionCommandHandler implements ICommandHandler {
  constructor(
    private readonly bagSectionRepository: BagSectionRepositoryPort
  ) {}

  public async execute({
    payload,
  }: UpdateBagSectionCommand): Promise<UpdateBagSectionCommandResult> {
    await this.bagSectionRepository.updateBagSection(payload);
    return { bagSection: await this.bagSectionRepository.getBagSection() };
  }
}
