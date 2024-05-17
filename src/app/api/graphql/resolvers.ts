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
    fundRaiser: async (_: undefined, args: FundRaiser) => {
      const combinedKey = process.env.COMBINED_KEY_AUTH;
      const cookie = process.env.CHARITY_COOKIE_TOKEN;
      const nonprofitId = process.env.NONPROFIT_ID;
      const { title, description, goal } = args;

      if (combinedKey && cookie) {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", combinedKey);
        myHeaders.append("Cookie", cookie);

        const raw = JSON.stringify({
          nonprofitId: nonprofitId,
          title: title,
          description: description,
          startDate: "2024-05-14",
          endDate: "2024-06-30",
          goal: Number(goal),
          raisedOffline: 1000,
          currency: "USD",
        });
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow" as RequestRedirect,
        };
        try {
          const response = await fetch(
            "https://partners.every.org/v0.2/fundraiser",
            requestOptions
          );
          if (response.ok) {
            const result = await response.json();
            console.log("result from fundraiser api:>> ", result);
            return result;
          }
          if (!response.ok) {
            console.log("external api error", response);
          }
        } catch (error) {
          console.log("error from every api", error);
        }
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
