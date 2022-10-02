
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class UpdateBagSectionInput {
    name?: Nullable<string>;
}

export class Item {
    id: string;
    name: string;
    description: string;
    quantity: number;
    weight: number;
}

export class BagSection {
    name: string;
    items: Item[];
}

export abstract class IQuery {
    abstract bagSection(): BagSection | Promise<BagSection>;
}

export abstract class IMutation {
    abstract updateBagSection(input?: Nullable<UpdateBagSectionInput>): BagSection | Promise<BagSection>;
}

type Nullable<T> = T | null;
