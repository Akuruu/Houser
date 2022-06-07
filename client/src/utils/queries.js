import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users {
    
  }
`;

export const QUERY_USER = gql`
  query user($userId: ID!) {

  }
`;

export const QUERY_PROPERTIES = gql`
  query properties {

  }
`;

export const QUERY_PROPERTY = gql`
  query property($propertyId: ID!) {

  }
`;

export const QUERY_ME = gql`
  query me() {

  }
`;
