export type ItemReadModel = {
  id: string;
  name: string;
  description: string;
  quantity: number;
  weight: number;
  bagSectionId?: string | undefined | null;
};

export type ItemWriteModel = {
  id: string;
  name: string;
  description: string;
  quantity: number;
  weight: number;
  bagSectionId: string;
};

export const itemFixtureFactory = (): ItemReadModel => ({
  id: '1',
  name: 'ItemName',
  description: 'ItemDescription',
  quantity: 1,
  weight: 1,
  bagSectionId: '1',
});
