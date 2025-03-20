import { RootState } from "@/app/store/store";
import { selectUsersSearchTerm } from "./selectUsersSearchTerm";
import { Department } from "../types/type";

export const selectFilteredUsers = (
  state: RootState,
  department: Department
) => {
  const searchTerm = selectUsersSearchTerm(state);

  let users = state.users.departments[department];

  if (searchTerm) {
    users = users.filter((user) => {
      const searchTermToLowerCase = searchTerm.toLowerCase();

      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();

      const nameMatches = fullName.includes(searchTermToLowerCase);
      const userTagMatches = user.userTag
        .toLowerCase()
        .includes(searchTermToLowerCase);

      return nameMatches || userTagMatches;
    });
  }

  return users;
};
