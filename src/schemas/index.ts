import { buildSchema } from "graphql";

import { readFileSync } from "fs";

const UserSchema = readFileSync("./graphql/user.graphql", {
  encoding: "utf8",
  flag: "r",
});

export const schema = buildSchema(`
    ${UserSchema}
    type Query {
        users: [User]
        user(_id: String!): User
    }
`);
