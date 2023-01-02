"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const utils_1 = require("../utils");
exports.schema = (0, graphql_1.buildSchema)(`
    ${(0, utils_1.readGraphql)({ schema: "user" })}
    ${(0, utils_1.readGraphql)({ schema: "query" })}
    ${(0, utils_1.readGraphql)({ schema: "mutation" })}    
`);
