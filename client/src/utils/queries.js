import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
      landlord
      contact {
        firstName
        lastName
        street
        city
        state
        zipcode
        phone1
        phone2
      }
      properties {
        _id
        nickname
        street
        city
        state
        zipcode
        rent
        image
        due
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($userId: ID!) {
    users {
      _id
      username
      email
      landlord
      contact {
        firstName
        lastName
        street
        city
        state
        zipcode
        phone1
        phone2
      }
      properties {
        _id
        nickname
        street
        city
        state
        zipcode
        rent
        image
        due
      }
    }
  }
`;

export const QUERY_PROPERTIES = gql`
  query properties {
    properties {
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
        contact {
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

export const QUERY_PROPERTY = gql`
  query property($propertyId: ID!) {
    property(propertyId: $propertyId) {
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
        contact {
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

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      landlord
      contact {
        firstName
        lastName
        street
        city
        state
        zipcode
        phone1
        phone2
      }
      properties {
        _id
        nickname
        street
        city
        state
        zipcode
        rent
        image
        due
      }
    }
  }
`;

export const QUERY_PAYMENT = gql`
  query payment($id: String!, $propertyId: ID!) {
    id
    propertyId
    due
  }
`;
