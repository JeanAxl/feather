import { useReducer } from 'react';
import {
  BagSection,
  bagSectionFixtureFactory,
} from '../../core/domain/bag.model';
import { ItemReadModel } from '../../core/domain/item.model';

enum ACTIONS {
  ADD_ITEM = 'ADD_ITEM',
  UPDATE_ITEM = 'UDPATE_ITEM',
  DELETE_ITEM = 'DELETE_ITEM',
}

type AddItemActions = {
  type: ACTIONS.ADD_ITEM;
  payload: ItemReadModel;
};

type UpdateItemAction = {
  type: ACTIONS.UPDATE_ITEM;
  payload: { id: ItemReadModel['id']; input: Partial<ItemReadModel> };
};

type DeleteItemAction = {
  type: ACTIONS.DELETE_ITEM;
  payload: { id: ItemReadModel['id'] };
};

type ActionType = AddItemActions | UpdateItemAction | DeleteItemAction;

const reducer = (state: BagSection, action: ActionType) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.ADD_ITEM:
      return new BagSection(state.getId(), state.getName(), [
        ...state.getContent(),
        payload,
      ]);

    case ACTIONS.UPDATE_ITEM: {
      const newContent = state.getContent().map((item) => {
        if (item.id === payload.id) {
          return { ...item, ...payload.input };
        }
        return item;
      });
      return new BagSection(state.getId(), state.getName(), newContent);
    }

    case ACTIONS.DELETE_ITEM:
      return new BagSection(
        state.getId(),
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

  const addItemInBag = (item: ItemReadModel) => {
    dispatch({ type: ACTIONS.ADD_ITEM, payload: item });
  };

  const updateItemInBag = (
    id: ItemReadModel['id'],
    input: Partial<ItemReadModel>
  ) => {
    dispatch({ type: ACTIONS.UPDATE_ITEM, payload: { id, input } });
  };

  const deleteItemInBag = (id: ItemReadModel['id']) => {
    dispatch({ type: ACTIONS.DELETE_ITEM, payload: { id } });
  };

  return { bagSection, addItemInBag, updateItemInBag, deleteItemInBag };
};
