import { createAsyncThunk } from "@reduxjs/toolkit";
import { Department, User } from "../model/types/type";
import { usersService } from "./usersService";
import { UsersState } from "../model/slices/usersSlice";
import { CACHE_TIME } from "@/shared/consts";

export const fetchUsersByDepartment = createAsyncThunk<
  User[],
  Department,
  { rejectValue: string; state: { users: UsersState } }
>(
  "users/fetchUsersByDepartment",
  async (department, { rejectWithValue, getState }) => {
    try {
      const state = getState().users;

      const lastFetched = state.lastFetched[department];
      const cachedUsers = state.departments[department];

      if (cachedUsers && lastFetched && Date.now() - lastFetched < CACHE_TIME) {
        return cachedUsers;
      }

      const response = await usersService.fetchUserByDepartment(department);
      const users = response?.items;

      return users || [];
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);
