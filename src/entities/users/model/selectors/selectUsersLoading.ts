import { RootState } from "@/app/store/store";

export const selectUsersLoading = (state: RootState) => state.users.loading;
