import { AddItemInBagSectionCommandHandler } from './commands/add-item-in-bag-section/add-item-in-bag-section.command-handler';
import { DeleteItemInBagSectionCommandHandler } from './commands/delete-item-in-bag-section/delete-item-in-bag-section.command-handler';
import { UpdateBagSectionCommandHandler } from './commands/update-bag-section/update-bag-section.command-handler';
import { UpdateItemInBagSectionCommandHandler } from './commands/update-item-in-bag-section/update-item-in-bag-section.command-handler';
import { GetBagSectionQueryHandler } from './queries/get-bag-section/get-bag-section.query-handler';

export const queryHandlers = [GetBagSectionQueryHandler];
export const commandHandlers = [
  UpdateBagSectionCommandHandler,
  DeleteItemInBagSectionCommandHandler,
  AddItemInBagSectionCommandHandler,
  UpdateItemInBagSectionCommandHandler,
];
