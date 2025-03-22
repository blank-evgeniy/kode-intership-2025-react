import { AppSearchBar } from "@/widgets/app-search-bar";
import { Container } from "@/shared/ui/container/Container";

import { SearchBarContainer } from "./MainPage.styles";
import { DepartmentsTabs } from "./DepartmentsTabs";
import { Header } from "@/widgets/header/ui/Header";

export const MainPage = () => {
  return (
    <>
      <Header />
      <Container>
        <SearchBarContainer>
          <AppSearchBar />
        </SearchBarContainer>

        <DepartmentsTabs />
      </Container>
    </>
  );
};
