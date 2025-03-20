import { User } from "../model/types/type";

export const sortUsersByAlphabet = (users: User[]) =>
  [...users].sort((a, b) => a.firstName.localeCompare(b.firstName));
