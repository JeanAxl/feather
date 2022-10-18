import gql from 'graphql-tag';

gql`
  mutation addItemInBagSection($input: AddItemInBagSectionInput) {
    addItemInBagSection(input: $input)
  }
`;
