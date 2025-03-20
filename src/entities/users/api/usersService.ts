import { apiClient } from "@/shared/api/axios";
import { Department, UsersResponse } from "../model/types/type";

export const usersService = {
  fetchAllUsers: async () => {
    try {
      const response = await apiClient.get<UsersResponse>("/users", {
        params: {
          __example: "all",
          __dynamic: true,
        },
      });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  fetchUserByDepartment: async (department: Department) => {
    try {
      const response = await apiClient.get<UsersResponse>("/users", {
        params: {
          __example: department,
          __dynamic: true,
        },
      });

      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};
