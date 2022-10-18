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

export type AddItemInBagSectionInput = {
  bagSectionId: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  quantity?: InputMaybe<Scalars['Int']>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type BagSection = {
  __typename?: 'BagSection';
  id: Scalars['ID'];
  items: Array<Item>;
  name: Scalars['String'];
};

export type Item = {
  __typename?: 'Item';
  bagSectionId: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  quantity: Scalars['Int'];
  weight: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addItemInBagSection: Scalars['Boolean'];
  deleteItemInBagSection: Scalars['Boolean'];
  updateBagSection: Scalars['Boolean'];
};


export type MutationAddItemInBagSectionArgs = {
  input?: InputMaybe<AddItemInBagSectionInput>;
};


export type MutationDeleteItemInBagSectionArgs = {
  itemId: Scalars['ID'];
};


export type MutationUpdateBagSectionArgs = {
  bagSectionId?: InputMaybe<Scalars['ID']>;
  input?: InputMaybe<UpdateBagSectionInput>;
};

export type Query = {
  __typename?: 'Query';
  bagSection?: Maybe<BagSection>;
};


export type QueryBagSectionArgs = {
  id: Scalars['ID'];
};

export type UpdateBagSectionInput = {
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
};
