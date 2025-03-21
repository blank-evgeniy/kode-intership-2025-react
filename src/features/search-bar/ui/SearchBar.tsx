import { SearchIcon } from "@/shared/icons/SearchIcon";
import { Input } from "@/shared/ui/input/Input";
import { useUsersSearch } from "../model/useUsersSearch";
import { useTranslation } from "react-i18next";

interface SearchBarProps {
  renderAction?: () => React.ReactNode;
}

export const SearchBar = ({ renderAction }: SearchBarProps) => {
  const { handleSearch, searchTerm } = useUsersSearch();
  const { t } = useTranslation("common");

  return (
    <Input
      defaultValue={searchTerm || ""}
      onChange={handleSearch}
      style={{ width: "100%" }}
      id="search"
      name="search"
      placeholder={t("searchPlaceholder")}
      renderIcon={() => <SearchIcon />}
      renderActions={renderAction}
    />
  );
};
