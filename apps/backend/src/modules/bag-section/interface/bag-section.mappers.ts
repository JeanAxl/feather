import {
  AddItemInBagSectionInput,
  UpdateBagSectionInput,
  UpdateItemInBagSectionInput,
} from '../../../../graphql-generated-types';
import { AddItemInBagSectionCommandPayload } from '../core/application/commands/add-item-in-bag-section/add-item-in-bag-section.command';
import { UpdateBagSectionCommandPayload } from '../core/application/commands/update-bag-section/update-bag-section.command';
import { UpdateItemInBagSectionCommandPayload } from '../core/application/commands/update-item-in-bag-section/update-item-in-bag-section.command';

export const mapAddItemInBagSectionInputToPayload = (
  input: AddItemInBagSectionInput
): AddItemInBagSectionCommandPayload => {
  return {
    id: input.id,
    name: input.name,
    quantity: input.quantity ? input.quantity : undefined,
    description: input.description ? input.description : undefined,
    weight: input.weight ? input.weight : undefined,
    bagSectionId: input.bagSectionId ? input.bagSectionId : undefined,
  };
};

export const mapUpdateItemInBagSectionInputToPayload = (
  input: UpdateItemInBagSectionInput
): UpdateItemInBagSectionCommandPayload => {
  return {
    id: input.id,
    name: input.name ? input.name : undefined,
    quantity: input.quantity ? input.quantity : undefined,
    description: input.description ? input.description : undefined,
    weight: input.weight ? input.weight : undefined,
    bagSectionId: input.bagSectionId ? input.bagSectionId : undefined,
  };
};

export const mapUpdateBagSectionInputToPayload = (
  input: UpdateBagSectionInput
): UpdateBagSectionCommandPayload => {
  return {
    id: input.id,
    name: input.name ? input.name : undefined,
  };
};
