import { QueryRunner } from 'typeorm';

export type Fixture = {
  tableName: string;
  items: any[];
};

export const loadFixtures = async (
  queryRunner: QueryRunner,
  fixtures: Fixture[]
): Promise<void> => {
  try {
    await queryRunner.startTransaction();
    for (const fixture of fixtures) {
      try {
        const repository = queryRunner.manager.getRepository(fixture.tableName);
        const entitiesToSave = repository.create(fixture.items);
        await queryRunner.manager.save(entitiesToSave);
      } catch (error) {
        throw new Error(
          `Error on loading fixture > Failed to load fixtures
Message : ${error}
Table name : ${fixture.tableName} 
Fixtures : "${JSON.stringify(fixture.items)}`
        );
      }
    }
    await queryRunner.commitTransaction();
  } catch (error) {
    await queryRunner.rollbackTransaction();
    throw new Error(error as string);
  } finally {
    await queryRunner.release();
  }
};
