import { Item } from './item.model';

export class BagSection {
  constructor(private name: string, private content: Item[] = []) {}
  public setContent(content: Item[]) {
    this.content = content;
  }

  public getName() {
    return this.name;
  }

  public getContent() {
    return this.content;
  }

  public getTotalWeight() {
    return this.getContent().reduce(
      (totalWeight, currentItem) => totalWeight + currentItem.weight,
      0
    );
  }

  public getTotalItems() {
    return this.getContent().reduce(
      (totalItems, currentItem) => totalItems + currentItem.quantity,
      0
    );
  }
}

export const bagSectionFixtureFactory = (): BagSection => {
  return new BagSection('couchage', [
    {
      id: '1',
      description: 'MSR - Hubba Hubba NX',
      name: 'Tente 2 places',
      quantity: 1,
      weight: 1.9
    },
    {
      id: '2',
      description: 'MSR - Universal footprint',
      name: 'Footprint',
      quantity: 1,
      weight: 1.9
    },
    {
      id: '3',
      description: 'Thermarest - Z Lite',
      name: 'Tapis de sol',
      quantity: 1,
      weight: 1.9
    }
  ]);
};
