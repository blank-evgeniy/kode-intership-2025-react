import { RootState } from "@/app/store/store";
import { Department } from "../types/type";

export const selectUsersLoading = (state: RootState, department: Department) =>
  state.users.departments[department].loading;
