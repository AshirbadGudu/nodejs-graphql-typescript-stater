import { buildSchema } from "graphql";
import { readGraphql } from "../utils";

export const schema = buildSchema(`
    ${readGraphql({ schema: "user" })}
    ${readGraphql({ schema: "query" })}
    ${readGraphql({ schema: "mutation" })}    
`);
