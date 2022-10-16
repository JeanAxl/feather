import gql from 'graphql-tag';

gql`
  mutation deleteItemInBagSection($itemId: ID!) {
    deleteItemInBagSection(itemId: $itemId)
  }
`;
