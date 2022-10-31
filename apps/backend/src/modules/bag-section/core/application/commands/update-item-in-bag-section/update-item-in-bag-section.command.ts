import { Item } from '../../../domain/item.entity';

export type UpdateItemInBagSectionCommandPayload = { id: string } & NonNullable<
  Partial<Item>
>;

export class UpdateItemInBagSectionCommand {
  constructor(public readonly payload: UpdateItemInBagSectionCommandPayload) {}
}

export type UpdateItemInBagSectionCommandResult = void;
