import { BagSection, BagSectionWriteModel } from '../core/domain/bag.model';
import { ItemReadModel, ItemWriteModel } from '../core/domain/item.model';

export type AddItemInBagSectionFn = (item: ItemWriteModel) => void;
export type UpdateItemInBagFn = (
  id: ItemReadModel['id'],
  input: Partial<ItemReadModel>
) => void;
export type DeleteItemInBagFn = (id: ItemReadModel['id']) => void;
export type AddBagSectionFn = () => void;
export type DeleteBagSectionFn = (id: BagSection['id']) => void;
export type UpdateBagSectionFn = (
  id: BagSection['id'],
  input: BagSectionWriteModel
) => void;
