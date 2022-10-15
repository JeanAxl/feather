import { ICommand } from '@nestjs/cqrs';
import { BagSection } from '../../../domain/bag-section.entity';
import { Item } from '../../../domain/item.entity';

export type UpdateBagSectionCommandPayload = {
  id: string;
  name?: string | null;
  items: Item[];
};

export class UpdateBagSectionCommand implements ICommand {
  constructor(public readonly payload: UpdateBagSectionCommandPayload) {}
}

export type UpdateBagSectionCommandResult = {
  bagSection: BagSection;
};
