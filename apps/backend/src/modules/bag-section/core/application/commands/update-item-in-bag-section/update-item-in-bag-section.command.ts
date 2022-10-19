import { Item } from '../../../domain/item.entity';

type UpdateItemInBagSectionCommandPayload = Partial<Omit<Item, 'bagSectionId'>>;

export class UpdateItemInBagSectionCommand {
  constructor(public readonly payload: UpdateItemInBagSectionCommandPayload) {}
}

export type UpdateItemInBagSectionCommandResult = void;
