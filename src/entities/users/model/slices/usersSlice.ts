import { createSlice } from "@reduxjs/toolkit";
import { Department, SortType, User } from "../types/type";
import { fetchUsersByDepartment } from "../../api/fetchUsersByDepartment";

const createDepartmentState = (): Record<Department, User[]> =>
  Object.fromEntries(
    Object.values(Department).map((department) => [department, [] as User[]])
  ) as Record<Department, User[]>;

const createLastFetchedState = (): Record<Department, number | null> =>
  Object.fromEntries(
    Object.values(Department).map((department) => [department, null])
  ) as Record<Department, number | null>;

export interface UsersState {
  departments: Record<Department, User[]>;
  lastFetched: Record<Department, number | null>;
  loading: boolean;
  error: string | null;
  searchTerm: string | null;
  sortBy: SortType | null;
}

const initialState: UsersState = {
  departments: createDepartmentState(),
  lastFetched: createLastFetchedState(),
  loading: false,
  error: null,
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
    builder.addCase(fetchUsersByDepartment.fulfilled, (state, action) => {
      state.loading = false;

      const department = action.meta.arg;
      state.departments[department] = action.payload;
      state.lastFetched[department] = Date.now();
    });
    builder.addCase(fetchUsersByDepartment.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUsersByDepartment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Ошибка при загрузке пользователей";
    });
  },
});

export const usersReducer = usersSlice.reducer;
export const { setSearchTerm, setSortBy } = usersSlice.actions;
