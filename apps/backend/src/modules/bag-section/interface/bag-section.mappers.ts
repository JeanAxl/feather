import {
  AddItemInBagSectionInput,
  UpdateBagSectionInput,
} from '../../../../graphql-generated-types';
import { AddItemInBagSectionCommandPayload } from '../core/application/commands/add-item-in-bag-section/add-item-in-bag-section.command';
import { UpdateBagSectionCommandPayload } from '../core/application/commands/update-bag-section/update-bag-section.command';

export const mapAddItemInBagSectionInputToPayload = (
  input: AddItemInBagSectionInput
): AddItemInBagSectionCommandPayload => {
  return {
    id: input.id,
    name: input.name,
    quantity: input.quantity ? input.quantity : undefined,
    description: input.description ? input.description : undefined,
    weight: input.weight ? input.weight : undefined,
  };
};

export const mapUpdateItemInBagSectionInputToPayload = (
  input: UpdateBagSectionInput
): UpdateBagSectionCommandPayload => {
  return {
    id: input.id,
    name: input.name ? input.name : undefined,
  };
};
