import gql from 'graphql-tag';

gql`
  query bagSection {
    bagSection {
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
