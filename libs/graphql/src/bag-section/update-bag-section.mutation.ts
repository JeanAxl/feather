import gql from 'graphql-tag';

gql`
  mutation updateBagSection($input: UpdateBagSectionInput) {
    updateBagSection(input: $input) {
      name
      items {
        id
        name
        description
        quantity
        weight
      }
    }
  }
`;
