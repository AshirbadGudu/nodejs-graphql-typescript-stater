"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readGraphql = void 0;
const fs_1 = require("fs");
const readGraphql = ({ schema }) => {
    return (0, fs_1.readFileSync)(`./graphql/${schema}.graphql`, {
        encoding: "utf8",
        flag: "r",
    });
};
exports.readGraphql = readGraphql;
