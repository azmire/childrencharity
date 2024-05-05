import dbConnect from "@/lib/connectDB";
import FavouriteModel from "@/models/favourite";
import UserModel from "@/models/user";
import { generateToken } from "@/utils/jwt";
import { GraphQLError } from "graphql";
import { argsToArgsConfig } from "graphql/type/definition";
import { cookies } from "next/headers";
import { MyContext } from "./route";

const resolvers = {
  Mutation: {
    signUp: async (_: undefined, args: SignUpValuesType) => {
      try {
        await dbConnect(); //connect Mongoose
        const existingUser = await UserModel.findOne({
          email: args.email,
        });
        if (existingUser) {
          throw new GraphQLError("User with this email already exists");
        }
        const user = await UserModel.create({ ...args });
        return user;
      } catch (error) {
        const { message } = error as Error;
        throw new GraphQLError(message);
      }
    },
    login: async (_: undefined, args: LoginValuesType) => {
      try {
        await dbConnect();
        const user = await UserModel.findOne({ email: args.email });
        if (!user) {
          throw new GraphQLError("You have to sign up first!");
        }
        const passwordMatch = user.password === args.password; //bcrypt here
        if (!passwordMatch) {
          throw new GraphQLError("Incorrect password!");
        }
        const token = generateToken(user);
        cookies().set("token", token);
        console.log("token :>> ", token);
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
    getMe: async (_: undefined, __: {}, contextValue: MyContext) => {
      const { activeUserEmail } = contextValue;
      if (activeUserEmail) {
        try {
          const activeUser = await UserModel.findOne({
            email: activeUserEmail,
          });
          return activeUser;
        } catch (error) {
          const { message } = error as Error;
          throw new GraphQLError(message);
        }
      }
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
