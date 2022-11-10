import { render } from '@testing-library/react';
import { BagSection } from '../../core/domain/bag.model';
import { itemFixtureFactory } from '../../core/domain/item.model';
import { BagSectionComponent } from './bag-section.presentation';

describe('BagSectionPresentation', () => {
  const bagSection = new BagSection('id', 'name', [
    itemFixtureFactory({ name: 'ItemA' }),
  ]);
  const addItem = jest.fn();
  const updateItem = jest.fn();
  const deleteItem = jest.fn();
  const deleteBagSection = jest.fn();
  const updateBagSection = jest.fn();
  it('should render', () => {
    const { baseElement } = render(
      <BagSectionComponent
        bagSection={bagSection}
        addItemInBag={addItem}
        updateItemInBag={updateItem}
        deleteItemInBag={deleteItem}
        deleteBagSection={deleteBagSection}
        updateBagSection={updateBagSection}
      />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should display the title', async () => {
    const { findByText } = render(
      <BagSectionComponent
        bagSection={bagSection}
        addItemInBag={addItem}
        updateItemInBag={updateItem}
        deleteItemInBag={deleteItem}
        deleteBagSection={deleteBagSection}
        updateBagSection={updateBagSection}
      />
    );

    const element = await findByText(bagSection.getName());

    expect(element).toBeTruthy();
  });

  it('should display the items', async () => {
    const { findByText } = render(
      <BagSectionComponent
        bagSection={bagSection}
        addItemInBag={addItem}
        updateItemInBag={updateItem}
        deleteItemInBag={deleteItem}
        deleteBagSection={deleteBagSection}
        updateBagSection={updateBagSection}
      />
    );

    const element = await findByText('ItemA');
    expect(element).toBeTruthy();
  });
});
