import { gql } from '@apollo/client';

// create one for Tenants


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

//ADD_PROPERTY
export const ADD_PROPERTY = gql`
  mutation addProperty($input: AddPropertyInput ) {
    addProperty(input: $input) {
      _id
      nickname
      rent
      image
      due
    }
  }
`;

//ADD_CONTACT 
export const ADD_CONTACT = gql`
  mutation addContact($input: AddContactInput ) {
    addContact(input: $input) {
      _id
      username
      contact {
        _id
        firstName
        lastName
        street
        city
        state
        zipcode
        phone1
        phone2
      }
    }
  }
`;

// REMOVE_USER
export const REMOVE_USER = gql`
  mutation removeUser($userId: String!) {
    removeUser(userId: $userId) {
      _id
      username
      bookCount
      contact {
        _id
        firstName
        lastName
        street
        city
        state
        zipcode
        phone1
        phone2
      }
    }
  }
`;