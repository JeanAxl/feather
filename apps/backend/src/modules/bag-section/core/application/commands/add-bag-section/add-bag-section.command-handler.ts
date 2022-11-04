import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { BagSectionRepositoryPort } from '../../../domain/ports/bag-section-repositopry.port';
import {
  AddBagSectionCommand,
  AddBagSectionResult,
} from './add-bag-section.command';

@CommandHandler(AddBagSectionCommand)
export class AddBagSectionCommandHandler implements ICommandHandler {
  constructor(
    private readonly bagSectionRepository: BagSectionRepositoryPort
  ) {}

  public async execute({
    payload,
  }: AddBagSectionCommand): Promise<AddBagSectionResult> {
    await this.bagSectionRepository.addBagSection(payload);
  }
}
