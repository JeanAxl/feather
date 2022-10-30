import { ICommand } from '@nestjs/cqrs';
import * as uuid from 'uuid';
import { Item } from '../../../domain/item.entity';

type AddItemInBagSectionCommandPayload = NonNullable<Partial<Item>>;

export class AddItemInBagSectionCommand implements ICommand {
  constructor(public readonly payload: AddItemInBagSectionCommandPayload) {
    if (!uuid.validate(payload.id)) {
      throw new Error('api.bag-section.invalida_uuid');
    }
  }
}

export type AddItemInBagSectionCommandResult = void;
