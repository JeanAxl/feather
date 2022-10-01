import gql from 'graphql-tag';

gql`
  query bagSection {
    bagSection {
      name
    }
  }
`;

gql`
  mutation updateBagSection($name: String!) {
    updateBagSection(name: $name) {
      name
    }
  }
`;
