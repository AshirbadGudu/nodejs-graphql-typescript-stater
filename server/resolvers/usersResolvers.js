"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let users = [
    {
        _id: "1",
        displayName: "sunil",
        email: "sunil@gmail.com",
        password: "sunil@gmail.com",
    },
];
exports.default = {
    users: (parent, args) => {
        return users;
    },
    user: ({ _id }) => {
        return users.find((user) => user._id === _id);
    },
    createUser: ({ user }, args) => {
        const newUser = Object.assign(Object.assign({}, user), { _id: `${Date.now()}` });
        users.push(newUser);
        return newUser;
    },
};
