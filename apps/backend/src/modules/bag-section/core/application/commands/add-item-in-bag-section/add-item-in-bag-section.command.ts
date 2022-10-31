import { ICommand } from '@nestjs/cqrs';
import * as uuid from 'uuid';
import { VALIDATION_ERRORS } from '../../../../../../shared/error-handling/errors.constants';
import { Item } from '../../../domain/item.entity';

export type AddItemInBagSectionCommandPayload = NonNullable<Partial<Item>>;

export class AddItemInBagSectionCommand implements ICommand {
  constructor(public readonly payload: AddItemInBagSectionCommandPayload) {
    if (payload.id && !uuid.validate(payload.id)) {
      throw new Error(VALIDATION_ERRORS.INVALID);
    }
  }
}

export type AddItemInBagSectionCommandResult = void;
