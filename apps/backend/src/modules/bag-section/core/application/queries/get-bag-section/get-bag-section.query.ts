import { BagSection } from '../../../domain/bag-section.entity';
type GetBagSectionQueryPayload = {
  id: BagSection['id'];
};
export class GetBagSectionQuery {
  constructor(public readonly payload: GetBagSectionQueryPayload) {}
}

export type GetBagSectionQueryResult = BagSection | null;
