import { createSlice } from "@reduxjs/toolkit";
import { Department, SortType, User } from "../types/type";
import { fetchUsersByDepartment } from "../../api/fetchUsersByDepartment";

interface DepartmentState {
  users: User[];
  lastFetched: number | null;
  loading: boolean;
  error: string | null;
}

const initialDepartmentState: DepartmentState = {
  users: [],
  lastFetched: null,
  loading: false,
  error: null,
};

export interface UsersState {
  departments: Record<Department, DepartmentState>;
  searchTerm: string | null;
  sortBy: SortType | null;
}

const initialState: UsersState = {
  departments: Object.fromEntries(
    Object.values(Department).map((department) => [
      department,
      { ...initialDepartmentState },
    ])
  ) as Record<Department, DepartmentState>,
  searchTerm: null,
  sortBy: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersByDepartment.pending, (state, action) => {
        const department = action.meta.arg;
        state.departments[department].loading = true;
        state.departments[department].error = null;
      })
      .addCase(fetchUsersByDepartment.fulfilled, (state, action) => {
        const department = action.meta.arg;
        state.departments[department].users = action.payload;
        state.departments[department].lastFetched = Date.now();
        state.departments[department].loading = false;
      })
      .addCase(fetchUsersByDepartment.rejected, (state, action) => {
        const department = action.meta.arg;
        state.departments[department].loading = false;
        state.departments[department].error = action.payload as string;
      });
  },
});

export const usersReducer = usersSlice.reducer;
export const { setSearchTerm, setSortBy } = usersSlice.actions;
