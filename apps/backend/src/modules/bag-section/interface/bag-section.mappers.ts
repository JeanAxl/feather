import {
  UpdateBagSectionInput,
  UpdateItemInBagSectionInput,
} from '../../../../graphql-generated-types';
import { UpdateBagSectionCommandPayload } from '../core/application/commands/update-bag-section/update-bag-section.command';
import { UpdateItemInBagSectionCommandPayload } from '../core/application/commands/update-item-in-bag-section/update-item-in-bag-section.command';

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
