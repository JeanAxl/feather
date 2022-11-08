import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import {
  DeleteBagSectionCommand,
  DeleteBagSectionCommandResult,
} from './delete-bag-section.command';

CommandHandler(DeleteBagSectionCommand);
export class DeleteBagSectionCommandHandler implements ICommandHandler {
  constructor() {}

  public async execute({
    payload,
  }: DeleteBagSectionCommand): Promise<DeleteBagSectionCommandResult> {}
}
