const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    landlord: Boolean
    contact: [Contact]
    property: [Property]
  }

  type Property {
    _id: ID!
    nickname: String
    rent: Int
    image: String
    due: Date
    contact: [Contact]!
  }

  type Contact {
    _id: ID!
    firstName: String
    lastName: String
    street: String
    city: String
    state: String
    zipcode: Int
    phone1: String
    phone2: String
  }

  input inputContact {
    contactId: Int
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
    rent: Int
    image: String
    due: Date

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
    contacts: [Contact]
    contact(contactId: ID!): Contact
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addProperty(input: inputProperty): Property
    addContact(input: inputContact): User
    removeUser(userId: ID!, contactId: ID!, propertyId: ID!): User
  }
`;


module.exports = typeDefs;
