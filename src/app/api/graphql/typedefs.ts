const typeDefs = `#graphql
type User {
    _id:ID!
    email: String!
    username: String
}
type Favourite {
    _id:ID!
    favourite: String
    author: User!
}
type Query {
    favourites:[Favourite]
    user(id:ID!):User
}
type Mutation {signUp( email: String!, password:String!, username:String!): User!
    login( email: String!, password:String!): User!
}

`;
export default typeDefs;
