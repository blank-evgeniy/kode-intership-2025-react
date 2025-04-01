import { RootState } from "@/app/store/store";
import { selectUsersSearchTerm } from "./selectUsersSearchTerm";
import { Department } from "../types/type";

export const selectFilteredUsers = (
  state: RootState,
  department: Department
) => {
  const searchTerm = selectUsersSearchTerm(state);

  let users = state.users.departments[department].users;

  if (searchTerm) {
    users = users.filter((user) => {
      const searchKeys = searchTerm.toLowerCase().trim().split(" ");

      const isMatched = searchKeys.every((searchKey) => {
        return (
          user.firstName.toLowerCase().includes(searchKey) ||
          user.lastName.toLowerCase().includes(searchKey) ||
          user.userTag.toLowerCase().includes(searchKey)
        );
      });

      return isMatched;
    });
  }

  return users;
};
