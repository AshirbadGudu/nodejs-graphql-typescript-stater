import { User } from "../types";

let users: User[] = [
  {
    _id: "1",
    displayName: "sunil",
    email: "sunil@gmail.com",
    password: "sunil@gmail.com",
  },
];

export default {
  users: (parent: any, args: any) => {
    return users;
  },
  user: ({ _id }: any) => {
    return users.find((user) => user._id === _id);
  },
};
