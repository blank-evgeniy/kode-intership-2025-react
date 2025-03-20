import { AppSearchBar } from "@/widgets/app-search-bar";
import { Container } from "@/shared/ui/container/Container";
import { Heading } from "@/shared/ui/heading/Heading";

import { HeadingContainer, SearchBarContainer } from "./MainPage.styles";

export const MainPage = () => {
  return (
    <Container>
      <HeadingContainer>
        <Heading>Поиск</Heading>
      </HeadingContainer>

      <SearchBarContainer>
        <AppSearchBar />
      </SearchBarContainer>
    </Container>
  );
};
