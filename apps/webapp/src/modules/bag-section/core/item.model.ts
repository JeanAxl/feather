export type Item = {
  id: string;
  name: string;
  description: string;
  quantity: number;
  weight: number;
};

export const itemFixtureFactory = (): Item => ({
  id: '1',
  name: 'ItemName',
  description: 'ItemDescription',
  quantity: 1,
  weight: 1
});
