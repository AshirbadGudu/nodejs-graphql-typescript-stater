"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const routers_1 = require("./routers");
const express_graphql_1 = require("express-graphql");
const schemas_1 = require("./schemas");
const resolvers_1 = require("./resolvers");
(0, dotenv_1.config)();
const PORT = process.env.PORT || 3023;
const app = (0, express_1.default)();
// For parsing application/json type body add following middleware
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.get("/", (_, res) => res.send("Node JS Express Typescript Server Running"));
/**
 * Create a REST API for users route
 * */
app.use("/users/", routers_1.users);
/**
 * Create a graphql endpoint
 * */
app.use("/graphql", (0, express_graphql_1.graphqlHTTP)({
    schema: schemas_1.schema,
    rootValue: Object.assign({}, resolvers_1.usersResolvers),
    graphiql: true,
}));
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
