import gql from 'graphql-tag';

gql`
  mutation deleteBagSection($bagSectionId: ID!) {
    deleteBagSection(bagSectionId: $bagSectionId)
  }
`;
