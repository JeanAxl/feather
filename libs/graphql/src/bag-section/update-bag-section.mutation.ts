import gql from 'graphql-tag';

gql`
  mutation updateSection($input: UpdateBagSectionInput) {
    updateSection(input: $input) 
  }
`;
