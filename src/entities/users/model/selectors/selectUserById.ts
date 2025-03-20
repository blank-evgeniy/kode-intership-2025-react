import { RootState } from "@/app/store/store";

export const selectUserById = (state: RootState, id: string) =>
  state.users.departments.all.find((user) => user.id === id);
