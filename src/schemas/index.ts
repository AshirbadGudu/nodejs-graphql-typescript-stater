import { buildSchema } from "graphql";
import { readGraphql } from "../utils";

const UserSchema = readGraphql({ schema: "user" });

export const schema = buildSchema(`
    ${UserSchema}
    type Query {
        users: [User]
        user(_id: String!): User
    }
    type Mutation {
        createUser(user: UserInput): User
    }
`);
