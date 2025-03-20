import { RootState } from "@/app/store/store";

export const selectUsersSearchTerm = (state: RootState) =>
  state.users.searchTerm;
