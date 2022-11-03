import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../../shared/redux/store';
import {
  BagSection,
  bagSectionFixtureFactory,
} from '../../core/domain/bag.model';
import { ItemReadModel } from '../../core/domain/item.model';

export interface BagSectionState {
  value: BagSection;
}

const initialState = {
  value: bagSectionFixtureFactory(),
};

export const bagSectionSlice = createSlice({
  name: 'bagSection',
  initialState,
  reducers: {
    addItemInBag: (state, action: PayloadAction<ItemReadModel>) => {
      state.value = new BagSection(state.value.getId(), state.value.getName(), [
        ...state.value.getContent(),
        action.payload,
      ]);
    },
    deleteItemInBag: (state, action: PayloadAction<ItemReadModel['id']>) => {
      state.value = new BagSection(
        state.value.getId(),
        state.value.getName(),
        state.value.getContent().filter((item) => item.id != action.payload)
      );
    },
    updateItemInBag: (
      state,
      action: PayloadAction<{
        id: ItemReadModel['id'];
        input: Partial<ItemReadModel>;
      }>
    ) => {
      const newContent = state.value.getContent().map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, ...action.payload.input };
        }
        return item;
      });
      state.value = new BagSection(
        state.value.getId(),
        state.value.getName(),
        newContent
      );
    },
  },
});

export const { addItemInBag, updateItemInBag, deleteItemInBag } =
  bagSectionSlice.actions;
export const selectBagSection = (state: RootState) => state.bagSection.value;

export const bagSectionReducer = bagSectionSlice.reducer;
