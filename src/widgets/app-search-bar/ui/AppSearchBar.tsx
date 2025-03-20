import { SearchBar } from "@/features/search-bar";
import { UsersSortingAction } from "@/features/users-sorting";

export const AppSearchBar = () => (
  <SearchBar renderAction={() => <UsersSortingAction />} />
);
