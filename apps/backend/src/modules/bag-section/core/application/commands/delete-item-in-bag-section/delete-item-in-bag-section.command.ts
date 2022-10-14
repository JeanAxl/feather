type DeleteItemInBagSectionCommandPayload = {
  itemId: string;
};

export class DeleteItemInBagSectionCommand {
  constructor(public readonly payload: DeleteItemInBagSectionCommandPayload) {}
}

export type DeleteItemInBagSectionCommandResult = void;
