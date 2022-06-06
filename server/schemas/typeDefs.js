const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    landlord: Boolean
    contact: Contact
    properties: [Property]
  }

  type Contact {
    firstName: String
    lastName: String
    street: String
    city: String
    state: String
    zipcode: Int
    phone1: String
    phone2: String
  }

  type Property {
    _id: ID!
    nickname: String
    street: String
    city: String
    state: String
    zipcode: String
    rent: Int
    image: String
    due: String
  }

  input inputContact {
    firstName: String
    lastName: String
    street: String
    city: String
    state: String
    zipcode: Int
    phone1: String
    phone2: String
  }

  input inputProperty {
    propertyId: Int
    nickname: String
    street: String
    city: String
    state: String
    zipcode: String
    rent: Int
    image: String
    due: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(userId: ID!): User
    properties: [Property]
    property(propertyId: ID!): User
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
  }

  type Mutation {
    addUser(
      username: String!
      email: String!
      password: String!
      landlord: Boolean!
    ): Auth
    login(email: String!, password: String!): Auth
    addProperty(input: inputProperty): Property
    addContact(input: inputContact): User
    addTenant(userId: ID!): Property
    removeTenant(propertyId: ID!, userId: ID!): Property
    removeUser(userId: ID!, contactId: ID!, propertyId: ID!): User
    removeProperty(propertyId: ID!): Property
  }
`;

module.exports = typeDefs;
