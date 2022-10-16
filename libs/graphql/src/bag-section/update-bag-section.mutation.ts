import gql from 'graphql-tag';

gql`
  mutation updateBagSection($input: UpdateBagSectionInput) {
    updateBagSection(input: $input) {}
  }
`;
