import { AddBagSectionCommandHandler } from './commands/add-bag-section/add-bag-section.command-handler';
import { AddItemInBagSectionCommandHandler } from './commands/add-item-in-bag-section/add-item-in-bag-section.command-handler';
import { DeleteBagSectionCommandHandler } from './commands/delete-bag-section/delete-bag-section.command-handler';
import { DeleteItemInBagSectionCommandHandler } from './commands/delete-item-in-bag-section/delete-item-in-bag-section.command-handler';
import { UpdateBagSectionCommandHandler } from './commands/update-bag-section/update-bag-section.command-handler';
import { UpdateItemInBagSectionCommandHandler } from './commands/update-item-in-bag-section/update-item-in-bag-section.command-handler';
import { GetBagSectionQueryHandler } from './queries/get-bag-section/get-bag-section.query-handler';
import { GetBagSectionsQueryHandler } from './queries/get-bag-sections/get-bag-sections.query-handler';

export const queryHandlers = [
  GetBagSectionQueryHandler,
  GetBagSectionsQueryHandler,
];

export const commandHandlers = [
  UpdateBagSectionCommandHandler,
  DeleteItemInBagSectionCommandHandler,
  AddItemInBagSectionCommandHandler,
  UpdateItemInBagSectionCommandHandler,
  DeleteBagSectionCommandHandler,
  AddBagSectionCommandHandler,
];
