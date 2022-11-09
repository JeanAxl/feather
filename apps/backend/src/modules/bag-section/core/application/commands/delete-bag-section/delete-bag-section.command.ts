import { ICommand } from '@nestjs/cqrs';
import { BagSection } from '../../../domain/bag-section.entity';

export type DeleteBagSectionCommandPayload = {
  id: BagSection['id'];
};

export class DeleteBagSectionCommand implements ICommand {
  constructor(public readonly payload: DeleteBagSectionCommandPayload) {}
}

export type DeleteBagSectionCommandResult = void;
