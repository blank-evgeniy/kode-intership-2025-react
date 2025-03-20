import { RootState } from "@/app/store/store";

export const selectUsersError = (state: RootState) => state.users.error;
