import { readFileSync } from "fs";

export const readGraphql = ({ schema }: { schema: String }) => {
  return readFileSync(`./graphql/${schema}.graphql`, {
    encoding: "utf8",
    flag: "r",
  });
};
