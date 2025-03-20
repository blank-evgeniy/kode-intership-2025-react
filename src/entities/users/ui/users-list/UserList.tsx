import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  selectFilteredUsers,
  selectUsersError,
  selectUsersLoading,
  selectUsersSortBy,
} from "../../model/selectors";
import { UsersListContainer } from "./UsersList.styles";
import { Department } from "../../model/types/type";
import { fetchUsersByDepartment } from "../../api/fetchUsersByDepartment";
import { UserListSkeleton } from "./UserListSkeleton";
import { UsersError } from "../users-status/UsersError";
import { UsersEmpty } from "../users-status/UsersEmpty";
import { sortUsersByAlphabet } from "../../lib/sortUsersByAlphabet";
import { UserCard } from "../user-card/UserCard";
import { UserCardsWithSeparator } from "../user-card/UserCardsWithSeparator";
import { sortUsersByBirthday } from "../../lib/sortUsersByBirthday";

interface UserListProps {
  department: Department;
}

export const UserList = ({ department }: UserListProps) => {
  const dispatch = useAppDispatch();

  const sortBy = useAppSelector(selectUsersSortBy);

  const loading = useAppSelector(selectUsersLoading);
  const error = useAppSelector(selectUsersError);
  const users = useAppSelector((state) =>
    selectFilteredUsers(state, department)
  );

  useEffect(() => {
    dispatch(fetchUsersByDepartment(department));
  }, [department, dispatch]);

  if (loading) {
    return <UserListSkeleton />;
  }

  if (error) {
    return <UsersError />;
  }

  if (users.length === 0) {
    return <UsersEmpty />;
  }

  const sortedUsers = (function () {
    if (sortBy === "alphabetical") {
      return sortUsersByAlphabet(users).map((user) => (
        <UserCard key={user.id} user={user} />
      ));
    } else if (sortBy === "birthday") {
      return <UserCardsWithSeparator users={sortUsersByBirthday(users)} />;
    } else {
      return users.map((user) => <UserCard key={user.id} user={user} />);
    }
  })();

  return <UsersListContainer>{sortedUsers}</UsersListContainer>;
};
