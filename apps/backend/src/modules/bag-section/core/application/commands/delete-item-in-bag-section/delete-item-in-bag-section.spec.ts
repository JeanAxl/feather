import { ItemInMemoryRepository } from '../../../../infrastructure/in-memory/item.in-memory-repository';
import { DeleteItemInBagSectionCommand } from './delete-item-in-bag-section.command';
import { DeleteItemInBagSectionCommandHandler } from './delete-item-in-bag-section.command-handler';

describe('DeleteItemInBagSectionCommandHandler', () => {
  it('should remove an item by id', async () => {
    const itemId = 'itemId';
    const command = new DeleteItemInBagSectionCommand({
      itemId,
    });
    const itemRepository = new ItemInMemoryRepository();
    itemRepository.feedWith([
      {
        id: 'itemId',
        name: 'someName',
        description: 'someDescription',
        weight: 1,
        quantity: 1,
      },
    ]);
    const commandHandler = new DeleteItemInBagSectionCommandHandler(
      itemRepository
    );
    await commandHandler.execute(command);

    const items = itemRepository.items;
    expect(items.find((item) => item.id === itemId)).toBeUndefined();
  });
});
