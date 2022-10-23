import { IQuery } from '@nestjs/cqrs';
import { BagSection } from '../../../domain/bag-section.entity';

export class GetBagSectionsQuery implements IQuery {}

export type GetBagSectionsQueryResult = BagSection[];
