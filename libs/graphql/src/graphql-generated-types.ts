
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class BagSection {
    name: string;
}

export abstract class IQuery {
    abstract bagSection(): Nullable<BagSection> | Promise<Nullable<BagSection>>;
}

export abstract class IMutation {
    abstract updateBagSection(name: string): BagSection | Promise<BagSection>;
}

type Nullable<T> = T | null;
