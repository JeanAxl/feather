import { UpdateBagSectionCommandHandler } from './commands/update-bag-section/update-bag-section.command-handler';
import { GetBagSectionQueryHandler } from './queries/get-bag-section/get-bag-section.query-handler';

export const queryHandlers = [GetBagSectionQueryHandler];
export const commandHandlers = [UpdateBagSectionCommandHandler];
