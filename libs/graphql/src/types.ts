export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BagSection = {
  __typename?: 'BagSection';
  items: Array<Item>;
  name: Scalars['String'];
};

export type Item = {
  __typename?: 'Item';
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  quantity: Scalars['Int'];
  weight: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  updateBagSection: BagSection;
};


export type MutationUpdateBagSectionArgs = {
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  bagSection: BagSection;
};
