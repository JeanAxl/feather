import { ICommand } from '@nestjs/cqrs';

export type AddBagSectionCommandPayload = {
  id: string;
  name: string;
};

export class AddBagSectionCommand implements ICommand {
  constructor(public readonly payload: AddBagSectionCommandPayload) {}
}

export type AddBagSectionCommandResult = void;
