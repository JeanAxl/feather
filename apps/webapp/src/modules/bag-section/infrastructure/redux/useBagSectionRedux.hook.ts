import { useReducer } from 'react';
import {
  BagSection,
  bagSectionFixtureFactory,
} from '../../core/domain/bag.model';
import { Item } from '../../core/domain/item.model';

enum ACTIONS {
  ADD_ITEM = 'ADD_ITEM',
  UPDATE_ITEM = 'UDPATE_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
}

type AddItemActions = {
  type: ACTIONS.ADD_ITEM;
  payload: Item;
};

type UpdateItemAction = {
  type: ACTIONS.UPDATE_ITEM;
  payload: { id: Item['id']; input: Partial<Item> };
};

type DeleteItemAction = {
  type: ACTIONS.DELETE_ITEM;
  payload: { id: Item['id'] };
};

type ActionType = AddItemActions | UpdateItemAction | DeleteItemAction;

const reducer = (state: BagSection, action: ActionType) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.ADD_ITEM:
      return new BagSection(state.getName(), [...state.getContent(), payload]);

    case ACTIONS.UPDATE_ITEM: {
      const newContent = state.getContent().map((item) => {
        if (item.id === payload.id) {
          return { ...item, ...payload.input };
        }
        return item;
      });
      return new BagSection(state.getName(), newContent);
    }

    case ACTIONS.DELETE_ITEM:
      return new BagSection(
        state.getName(),
        state.getContent().filter((item) => item.id != payload.id)
      );

    default:
      return state;
  }
};

export const useBagSectionRedux = () => {
  const [bagSection, dispatch] = useReducer(
    reducer,
    bagSectionFixtureFactory()
  );

  const addItemInBag = (item: Item) => {
    dispatch({ type: ACTIONS.ADD_ITEM, payload: item });
  };

  const updateItemInBag = (id: Item['id'], input: Partial<Item>) => {
    dispatch({ type: ACTIONS.UPDATE_ITEM, payload: { id, input } });
  };

  const deleteItemInBag = (id: Item['id']) => {
    dispatch({ type: ACTIONS.DELETE_ITEM, payload: { id } });
  };

  return { bagSection, addItemInBag, updateItemInBag, deleteItemInBag };
};
