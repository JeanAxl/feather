import { ICommand } from '@nestjs/cqrs';
import { Item } from '../../../domain/item.entity';

type AddItemInBagSectionCommandPayload = NonNullable<Partial<Item>>;

export class AddItemInBagSectionCommand implements ICommand {
  constructor(public readonly payload: AddItemInBagSectionCommandPayload) {}
}

export type AddItemInBagSectionCommandResult = void;
