export type Item = {
  id: string;
  name: string;
  description: string;
  quantity: number;
  weight: number;
  bagSectionId?: string | null;
};

export const itemFixtureFactory = (): Item => ({
  id: '1',
  name: 'ItemName',
  description: 'ItemDescription',
  quantity: 1,
  weight: 1,
  bagSectionId: '1',
});
