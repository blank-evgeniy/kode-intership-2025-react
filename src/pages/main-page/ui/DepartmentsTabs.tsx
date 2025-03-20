import { UserList } from "@/entities/users";
import { Department } from "@/entities/users/model/types/type";
import Tabs from "@/shared/ui/tabs/Tabs";

export const DepartmentsTabs = () => (
  <Tabs
    tabs={[
      { label: "Все", content: <UserList department={Department.all} /> },
      {
        label: "Дизайнеры",
        content: <UserList department={Department.design} />,
      },
      {
        label: "Aналитики",
        content: <UserList department={Department.analytics} />,
      },
      { label: "iOS", content: <UserList department={Department.ios} /> },
      {
        label: "Android",
        content: <UserList department={Department.android} />,
      },
      {
        label: "HR",
        content: <UserList department={Department.hr} />,
      },
      {
        label: "PR",
        content: <UserList department={Department.pr} />,
      },
      {
        label: "Backend",
        content: <UserList department={Department.backend} />,
      },
      {
        label: "Frontend",
        content: <UserList department={Department.frontend} />,
      },
      {
        label: "QA",
        content: <UserList department={Department.qa} />,
      },
    ]}
  />
);
