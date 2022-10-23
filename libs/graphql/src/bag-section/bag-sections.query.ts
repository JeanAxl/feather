import gql from 'graphql-tag';

gql`
  query bagSections {
    bagSections {
      id
      name
      items {
        id
        name
        description
        quantity
        weight
        bagSectionId
      }
    }
  }
`;
