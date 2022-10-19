import gql from 'graphql-tag';

gql`
  mutation updateItemInBagSection($input: UpdateItemInBagSectionInput) {
    updateItemInBagSection(input: $input)
  }
`;
