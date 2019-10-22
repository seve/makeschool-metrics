import { GraphQLServer } from "graphql-yoga";
import { prisma } from "./generated/prisma-client";

import webhookHandler from "./webhook";
import resolvers from "./resolvers";

console.log(resolvers);

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: request => {
    return { ...request, prisma };
  }
});
webhookHandler();
server.start(() => console.log(`Server is running on http://localhost:4000`));
