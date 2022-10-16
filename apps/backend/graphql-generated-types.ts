
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class ItemInput {
    id: string;
    name: string;
    description: string;
    quantity: number;
    weight: number;
}

export class UpdateBagSectionInput {
    id: string;
    name?: Nullable<string>;
    items: Nullable<ItemInput>[];
}

export class Item {
    id: string;
    name: string;
    description: string;
    quantity: number;
    weight: number;
}

export class BagSection {
    id: string;
    name: string;
    items: Item[];
}

export abstract class IQuery {
    abstract bagSection(id: string): BagSection | Promise<BagSection>;
}

export abstract class IMutation {
    abstract updateBagSection(bagSectionId?: Nullable<string>, input?: Nullable<UpdateBagSectionInput>): BagSection | Promise<BagSection>;

    abstract deleteItemInBagSection(itemId: string): boolean | Promise<boolean>;
}

type Nullable<T> = T | null;
