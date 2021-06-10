const { gql } = require('apollo-server-express');

const typeDefs = gql`
type NonFungibleToken {
    owner: String
    name: String
    price: String
}

type Query {
  hello: String
  token(owner:String!): NonFungibleToken
  tokens: [NonFungibleToken]
}

 type Mutation{
     addToken(owner:String!,name:String!,price:String!):String
     updateToken(owner:String!,name:String,price:String):String
     burnToken(owner:String!):String
 }

`;
module.exports = { typeDefs };