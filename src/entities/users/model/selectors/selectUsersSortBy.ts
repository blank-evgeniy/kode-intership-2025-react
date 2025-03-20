import { RootState } from "@/app/store/store";

export const selectUsersSortBy = (state: RootState) => state.users.sortBy;
