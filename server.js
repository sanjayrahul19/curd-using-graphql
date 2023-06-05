import { ApolloServer } from "apollo-server";
import typeDefs from "./graphql/typeDefs.js"
import resolvers from "./graphql/resolvers.js"
import { connectDB } from "./config/db.js";

const server = new ApolloServer({
  typeDefs,
  resolvers
})


connectDB();


server.listen({ port: 8000 })




