import { config } from "dotenv";
import express from "express";
import { users } from "./routers";
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql";
import { graphqlHTTP } from "express-graphql";

config();

const PORT = process.env.PORT || 3023;

const app = express();

// For parsing application/json type body add following middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (_, res) => res.send("Node JS Express Typescript Server Running"));

/**
 * Create a REST API for users route
 * */

app.use("/users/", users);

/**
 * Create a graphql
 * */

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "helloworld",
    fields: {
      message: {
        type: GraphQLString,
        resolve: () => "Hello World!",
      },
    },
  }),
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
