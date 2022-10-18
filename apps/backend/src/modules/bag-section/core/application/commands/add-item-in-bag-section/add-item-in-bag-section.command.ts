import { Item } from '../../../domain/item.entity';

type AddItemInBagSectionCommandPayload = NonNullable<Partial<Item>>;

export class AddItemInBagSectionCommand {
  constructor(public readonly payload: AddItemInBagSectionCommandPayload) {}
}

export type AddItemInBagSectionCommandResult = void;
