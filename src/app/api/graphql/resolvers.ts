import dbConnect from "@/lib/connectDB";
import FavouriteModel from "@/models/favourite";
import UserModel from "@/models/user";
import { GraphQLError } from "graphql";

const resolvers = {
  Mutation: {
    signUp: async (_: undefined, args: SignUpValuesType) => {
      try {
        await dbConnect(); //connect Mongoose
        const existingUser = await UserModel.findOne({
          email: args.signUpValues.email,
        });
        if (existingUser) {
          throw new GraphQLError("User with this email already exists");
        }
        const user = await UserModel.create({ ...args.signUpValues });
        return user;
      } catch (error) {
        const { message } = error as Error;
        throw new GraphQLError(message);
      }
    },
  },
  Query: {
    favourites: async () => {
      await dbConnect(); //connect Mongoose
      const favourites = await FavouriteModel.find({});
      return favourites;
    },
    user: async (_: undefined, args: { id: string }) => {
      //console.log("args :>> ", args);
      await dbConnect(); //connect Mongoose
      const user = await UserModel.findById(args.id);
      return user;
    },
  },
  // Favourite: {
  //   author: async (parent: Favourite) => {
  //     console.log(parent);
  //   },
  // },
};
export default resolvers;

// **********45:00*********
