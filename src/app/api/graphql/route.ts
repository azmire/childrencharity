import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import resolvers from "./resolvers";
import typeDefs from "./typedefs";

export type MyContext = {
  activeUserEmail: string | null;
};

const server = new ApolloServer<MyContext>({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server, {
  context: async () => {
    let activeUserEmail = null;
    return { activeUserEmail };
  },
});

export { handler as GET, handler as POST };
