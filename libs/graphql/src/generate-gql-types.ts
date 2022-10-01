import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';
const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['./apps/backend/**/*.graphql'],
  path: join(process.cwd(), 'apps/backend/graphql-generated-types.ts'),
  outputAs: 'class',
});
