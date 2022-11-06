import {
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
  Tree,
} from '@nrwl/devkit';
import { CommandQueryGeneratorSchema } from './schema';

interface NormalizedSchema {
  operationDirectory: string;
  operationFileName: string;
  operationNameCapitalized: string;
  operationTypeLowerCase: string;
  operationTypeCapitalized: string;
  moduleNameCapitalized: string;
}

function normalizeOptions(
  tree: Tree,
  options: CommandQueryGeneratorSchema
): NormalizedSchema {
  const operationName = names(`${options.name}`);
  const moduleName = names(options.module);
  const operationNameCapitalized = operationName.className;
  const operationTypeLowerCase = options.type === 'c' ? 'command' : 'query';
  const operationTypeCapitalized = options.type === 'c' ? 'Command' : 'Query';
  const moduleDirectory = `apps/backend/src/modules/${
    moduleName.fileName
  }/core/application/${options.type === 'c' ? 'commands' : 'queries'}`;
  const moduleNameCapitalized = moduleName.className;
  const operationDirectory = joinPathFragments(
    `${moduleDirectory}`,
    `${operationName.fileName}`
  );
  const operationFileName = operationName.fileName;
  console.log(operationDirectory);

  return {
    operationDirectory,
    operationFileName,
    operationTypeLowerCase,
    operationTypeCapitalized,
    operationNameCapitalized,
    moduleNameCapitalized,
  };
}

function addFiles(tree: Tree, options: NormalizedSchema) {
  generateFiles(
    tree,
    joinPathFragments(__dirname, 'files'),
    options.operationDirectory,
    {
      ...options,
      tmpl: '',
    }
  );
}

export default async function (
  tree: Tree,
  options: CommandQueryGeneratorSchema
) {
  const normalizedOptions = normalizeOptions(tree, options);

  addFiles(tree, normalizedOptions);
  await formatFiles(tree);
}
