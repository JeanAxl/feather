import gql from 'graphql-tag';

gql`
  mutation addBagSection($input: AddBagSectionInput) {
    addBagSection(input: $input)
  }
`;
