import { SearchIcon } from "@/shared/icons/SearchIcon";
import { Input } from "@/shared/ui/input/Input";

export const SearchBar = () => {
  return (
    <Input
      style={{ width: "100%" }}
      id="search"
      name="search"
      placeholder="Введите имя, фамилию, тег"
      renderIcon={() => <SearchIcon />}
      renderActions={() => <>Sort</>}
    />
  );
};
