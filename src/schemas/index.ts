import { buildSchema } from "graphql";
import { readGraphql } from "../utils";

export const schema = buildSchema(`
    ${readGraphql({ schema: "address" })}
    ${readGraphql({ schema: "cart" })}
    ${readGraphql({ schema: "category" })}
    ${readGraphql({ schema: "coupon" })}
    ${readGraphql({ schema: "order" })}
    ${readGraphql({ schema: "product" })}
    ${readGraphql({ schema: "review" })}
    ${readGraphql({ schema: "support" })}
    ${readGraphql({ schema: "wishlist" })}
    ${readGraphql({ schema: "user" })}
    ${readGraphql({ schema: "query" })}
    ${readGraphql({ schema: "mutation" })}    
`);
