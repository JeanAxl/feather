import gql from 'graphql-tag';

gql`
  query bagSection($id: ID!) {
    bagSection(id: $id) {
      id
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
