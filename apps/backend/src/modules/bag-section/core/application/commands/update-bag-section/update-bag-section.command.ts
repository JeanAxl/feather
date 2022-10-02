import { ICommand } from '@nestjs/cqrs';
import { BagSection } from '../../../domain/bag-section.entity';

export type UpdateBagSectionCommandPayload = {
  name?: string | null;
};

export class UpdateBagSectionCommand implements ICommand {
  constructor(public readonly payload: UpdateBagSectionCommandPayload) {}
}

export type UpdateBagSectionCommandResult = {
  bagSection: BagSection;
};
