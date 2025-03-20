import { SearchIcon } from "@/shared/icons/SearchIcon";
import { Input } from "@/shared/ui/input/Input";
import { useUsersSearch } from "../model/useUsersSearch";

interface SearchBarProps {
  renderAction?: () => React.ReactNode;
}

export const SearchBar = ({ renderAction }: SearchBarProps) => {
  const { handleSearch, searchTerm } = useUsersSearch();

  return (
    <Input
      defaultValue={searchTerm || ""}
      onChange={handleSearch}
      style={{ width: "100%" }}
      id="search"
      name="search"
      placeholder="Введите имя, фамилию, тег"
      renderIcon={() => <SearchIcon />}
      renderActions={renderAction}
    />
  );
};
