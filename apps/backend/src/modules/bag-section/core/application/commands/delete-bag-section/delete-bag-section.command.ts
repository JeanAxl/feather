import { ICommand } from '@nestjs/cqrs';

export type DeleteBagSectionCommandPayload = {};

export class DeleteBagSectionCommand implements ICommand {
  constructor(public readonly payload: DeleteBagSectionCommandPayload) {}
}

export type DeleteBagSectionCommandResult = void;
