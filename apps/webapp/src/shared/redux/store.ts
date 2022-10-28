import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { bagSectionReducer } from '../../modules/bag-section/hooks/redux/bag-section.reducer';

export const store = configureStore({
  reducer: {
    bagSection: bagSectionReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
