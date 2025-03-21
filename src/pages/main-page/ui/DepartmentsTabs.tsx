import { UserList } from "@/entities/users";
import { Department } from "@/entities/users/model/types/type";
import Tabs from "@/shared/ui/tabs/Tabs";
import { useTranslation } from "react-i18next";

export const DepartmentsTabs = () => {
  const { t } = useTranslation("main");

  return (
    <Tabs
      tabs={Object.values(Department).map((value) => ({
        id: value,
        label: t(value),
        content: <UserList department={value} />,
      }))}
    />
  );
};
