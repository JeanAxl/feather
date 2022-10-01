import gql from 'graphql-tag';

gql`
  mutation updateBagSection($name: String!) {
    updateBagSection(name: $name) {
      name
    }
  }
`;
