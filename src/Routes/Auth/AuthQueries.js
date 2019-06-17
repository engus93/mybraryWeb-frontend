import { gql } from "apollo-boost";

export const DUPLICATE_CHECK = gql`
  mutation duplicateCheck($action: String!, $word: String!) {
    duplicateCheck(action: $action, word: $word)
  }
`;

export const CREATE_ACCOUNT = gql`
  mutation createAccount($email: String!, $pw: String!, $username: String!) {
    createAccount(email: $email, pw: $pw, username: $username)
  }
`;

export const AUTHENTICATION = gql`
  mutation authentication($email: String!, $pw: String!) {
    authentication(email: $email, pw: $pw)
  }
`;

export const LOCAL_LOG_IN = gql`
  mutation userLogIn($token: String!) {
    userLogIn(token: $token) @client
  }
`;
