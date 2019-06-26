import { gql } from "apollo-boost";

// Apollo Client
export const ME = gql`
  {
    me {
      email
      username
    }
  }
`;

export const LOG_OUT = gql`
  mutation userLogOut {
    userLogOut @client
  }
`;

export const DELETE_ACCOUNT = gql`
  mutation {
    deleteAccount {
      username
    }
  }
`;

export const EDIT_USER_INFO = gql`
  mutation editUserInfo($pw: String, $username: String) {
    editUserInfo(pw: $pw, username: $username) {
      username
    }
  }
`;
