import dbConnect from "@/lib/connectDB";
import FavouriteModel from "@/models/favourite";
import UserModel from "@/models/user";
import { generateToken } from "@/utils/jwt";
import { GraphQLError } from "graphql";
import { argsToArgsConfig } from "graphql/type/definition";
import { cookies } from "next/headers";
import { MyContext } from "./route";
import { hashPassword, verifyPassword } from "@/utils/bcrypt";

const resolvers = {
  Mutation: {
    addFavourite: async (
      _: undefined,
      args: { favourite: string },
      contextValue: MyContext
    ) => {
      console.log("args", args);
      if (!contextValue.activeUserEmail) {
        throw new GraphQLError("You must be logged in to do this");
      }
      try {
        await dbConnect();
        const user = await UserModel.findOne({
          email: contextValue.activeUserEmail,
        });
        await dbConnect();
        const alreadyAddedToFavourites = await FavouriteModel.findOne({
          favourite: args.favourite,
        });
        if (!user) {
          throw new GraphQLError("No user could be found?");
        }
        if (alreadyAddedToFavourites) {
          const removeFavourite = await FavouriteModel.findOneAndDelete({
            favourite: args.favourite,
          });
          return removeFavourite;
        }
        const favourite = await FavouriteModel.create({
          author: user._id,
          favourite: args.favourite,
        });
        return favourite;
      } catch (error) {
        const { message } = error as Error;
        throw new GraphQLError(message);
      }
    },
    // addFavourite: async (_: undefined, args: { favourite: string }) => {
    //   try {
    //     await dbConnect();
    //     const favourite = await FavouriteModel.create({
    //       favourite: args.favourite,
    //     });
    //     return favourite;
    //   } catch (error) {
    //     const { message } = error as Error;
    //     throw new GraphQLError(message);
    //   }
    // },
    signUp: async (_: undefined, args: SignUpValuesType) => {
      try {
        await dbConnect(); //connect Mongoose
        const existingUser = await UserModel.findOne({
          email: args.email,
        });
        if (existingUser) {
          throw new GraphQLError("User with this email already exists");
        }
        const hashedPassword = await hashPassword(args.password); //from bcrypt.ts
        const user = await UserModel.create({
          email: args.email,
          username: args.username,
          password: hashedPassword,
        });
        const token = generateToken(user);
        cookies().set("token", token);
        console.log("token :>> ", token);
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
        const { password: hashedPassword } = user;
        const passwordMatch = await verifyPassword(
          args.password,
          hashedPassword
        ); //bcrypt here

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
  Favourite: {
    author: async (parent: Favourite) => {
      //console.log(parent);
      await dbConnect();
      const user = await UserModel.findById(parent.author);

      return user;
    },
  },
};
export default resolvers;
