import {
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
  Tree,
} from '@nrwl/devkit';
import { tsquery } from '@phenomnomnominal/tsquery';
import {
  ArrayLiteralExpression,
  Node as TypescriptNode,
  VariableDeclaration,
} from 'typescript';
import { CommandQueryGeneratorSchema } from './schema';

interface NormalizedSchema {
  operationDirectory: string;
  operationFileName: string;
  operationNameCapitalized: string;
  operationTypeLowerCase: string;
  operationTypeCapitalized: string;
  moduleNameCapitalized: string;
  applicationDirectory: string;
  applicationFileName: string;
  handlersIdentifierName: string;
}

function normalizeOptions(
  options: CommandQueryGeneratorSchema
): NormalizedSchema {
  const operationName = names(`${options.name}`);
  const moduleName = names(options.module);
  const operationNameCapitalized = operationName.className;
  const operationTypeLowerCase = options.type === 'c' ? 'command' : 'query';
  const operationTypeCapitalized = options.type === 'c' ? 'Command' : 'Query';
  const applicationDirectory = `apps/backend/src/modules/${moduleName.fileName}/core/application`;
  const operationsDirectory = `apps/backend/src/modules/${
    moduleName.fileName
  }/core/application/${options.type === 'c' ? 'commands' : 'queries'}`;
  const moduleNameCapitalized = moduleName.className;
  const operationDirectory = joinPathFragments(
    `${operationsDirectory}`,
    `${operationName.fileName}`
  );
  const operationFileName = operationName.fileName;
  const applicationFileName = `${moduleName.fileName}.application.ts`;
  const handlersIdentifierName =
    options.type === 'c' ? 'commandHandlers' : 'queryHandlers';
  return {
    operationDirectory,
    operationFileName,
    operationTypeLowerCase,
    operationTypeCapitalized,
    operationNameCapitalized,
    moduleNameCapitalized,
    applicationFileName,
    handlersIdentifierName,
    applicationDirectory,
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
  const normalizedOptions = normalizeOptions(options);

  await addFiles(tree, normalizedOptions);
  await updateApplicationModule(tree, normalizedOptions);

  await formatFiles(tree);
}

function updateApplicationModule(tree: Tree, options: NormalizedSchema) {
  const filePath = joinPathFragments(
    `${options.applicationDirectory}`,
    options.applicationFileName
  );
  const fileEntry = tree.read(filePath);
  const contents = fileEntry.toString();
  const handlerIdentifierName = options.handlersIdentifierName;
  const newContents = tsquery.replace(
    contents,
    'ArrayLiteralExpression',
    (node) => {
      const trNode = node as ArrayLiteralExpression;
      if (isHandlersDeclarations(trNode, handlerIdentifierName)) {
        const contentText = trNode.getText();
        const arrayContentAsString = contentText.match(/(?<=\[)[^\][]*(?=])/g);
        return `[
          ${arrayContentAsString[0]}${options.operationNameCapitalized}${options.operationTypeCapitalized}Handler
        ]`;
      }
    }
  );
  const newContentWithImport = ` import { ${options.operationNameCapitalized}${options.operationTypeCapitalized}Handler } from './${options.operationTypeLowerCase}s/${options.operationFileName}/${options.operationFileName}.${options.operationTypeLowerCase}-handler'
    ${newContents}
  `;
  if (newContentWithImport !== contents) {
    tree.write(filePath, newContentWithImport);
  }
}

const isHandlersDeclarations = (
  node: ArrayLiteralExpression,
  handlerType: string
): boolean => {
  return (
    assertNodeIsVariableDeclaration(node.parent) &&
    node.parent.name.getText() === handlerType
  );
};

const assertNodeIsVariableDeclaration = (
  node: TypescriptNode
): node is VariableDeclaration => node.kind === 254;
