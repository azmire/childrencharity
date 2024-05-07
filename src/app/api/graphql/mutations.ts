import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      email
      username
    }
  }
`;

export const SIGNUP = gql`
  mutation ($email: String!, $password: String!, $username: String!) {
    signUp(email: $email, password: $password, username: $username) {
      _id
      email
      username
    }
  }
`;

export const ADDTOFAVOURITE = gql`
  mutation ($favourites: String!) {
    addFavourite(favourite: $ein) {
      _id
      favourite
      createdAt
      sent {
        username
      }
    }
  }
`;
