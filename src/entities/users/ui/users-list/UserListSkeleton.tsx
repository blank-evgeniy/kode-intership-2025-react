import { UserCardSkeleton } from "../user-card/UserCardSkeleton";
import { UsersListContainer } from "./UsersList.styles";

export const UserListSkeleton = () => {
  return (
    <UsersListContainer>
      {Array.from({ length: 10 }).map((_, index) => (
        <UserCardSkeleton key={index} />
      ))}
    </UsersListContainer>
  );
};
