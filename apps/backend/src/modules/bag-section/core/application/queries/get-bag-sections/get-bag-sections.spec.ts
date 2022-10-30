import { testingModuleFactory } from '../../../../../../shared/test/test.module';
import { BagSectionModule } from '../../../../bag-section.module';
import { fixtures } from './fixtures';
import { GetBagSectionsQuery } from './get-bag-sections.query';
import { GetBagSectionsQueryHandler } from './get-bag-sections.query-handler';

describe('GetBagSectionsQueryHandler', () => {
  let queryHandler: GetBagSectionsQueryHandler;
  beforeAll(async () => {
    const [module] = await testingModuleFactory([BagSectionModule], fixtures);
    queryHandler = module.get(GetBagSectionsQueryHandler);
  });
  it('should return the BagSection items', async () => {
    const result = await queryHandler.execute(new GetBagSectionsQuery());
    expect(result.length).toEqual(1);
  });
});
