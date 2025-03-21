import { RootState } from "@/app/store/store";
import { Department } from "../types/type";

export const selectUsersError = (state: RootState, department: Department) =>
  state.users.departments[department].error;
