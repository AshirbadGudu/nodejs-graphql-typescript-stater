import { config } from "dotenv";
import express from "express";
import { users } from "./routers";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schemas";
import { usersResolvers } from "./resolvers";

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
 * Create a graphql endpoint
 * */

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: { ...usersResolvers },
    graphiql: true,
  })
);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
