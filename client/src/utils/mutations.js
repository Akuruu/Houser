import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        landlord
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
    $landlord: Boolean!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
      landlord: $landlord
    ) {
      token
      user {
        _id
        username
        landlord
      }
    }
  }
`;

//ADD_PROPERTY
export const ADD_PROPERTY = gql`
  mutation addProperty($input: AddPropertyInput) {
    addProperty(input: $input) {
      _id
      nickname
      street
      city
      state
      zipcode
      rent
      image
      due
      tenants
    }
  }
`;

//ADD_CONTACT
export const ADD_CONTACT = gql`
  mutation addContact($input: AddContactInput) {
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

export const ADD_TENANT = gql`
  mutation addTenant($propertyId: String!, $username: String!) {
    addTenant(propertyId: $propertyId, username: $username) {
      _id
      nickname
      street
      city
      state
      zipcode
      rent
      image
      due
      tenants {
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
  }
`;

export const REMOVE_TENANT = gql`
  mutation removeTenant($propertyId: String!, $userId: String!) {
    removeTenant(propertyId: $propertyId, userId: $userId) {
      _id
      nickname
      street
      city
      state
      zipcode
      rent
      image
      due
      tenants {
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
  }
`;
