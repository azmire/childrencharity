const typeDefs = `#graphql
type User {
    _id:ID!
    email: String!
    username: String
}
type Favourite {
    _id:ID!
    createdAt: String!
    favourite: String!
    author: User!
}
type FundRaiser {
    nonprofitId:String
    title:String
    description: String
    startDate: String
    endDate:String
    goal:String
    raisedOffline:Int
    currency:String
}
type Query {
    favourites:[Favourite]
    getMe:User
}

type Mutation {signUp( email: String!, password:String!, username:String!): User!
    login( email: String!, password:String!): User!
    addFavourite(favourite: String!):Favourite!
 fundRaiser(nonprofitId:String, title:String, description: String!, startDate: String, endDate:String, goal:String!, raisedOffline:Int, currency:String ): FundRaiser!
}

`;
export default typeDefs;
