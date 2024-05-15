import { gql } from "@apollo/client";

export const FAVOURITES = gql`
  query {
    favourites {
      _id
      createdAt
      favourite
      author {
        username
      }
    }
  }
`;
