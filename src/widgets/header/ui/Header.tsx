import { Heading } from "@/shared/ui/heading/Heading";
import { HeaderActions, HeaderContainer } from "./Header.styles";
import { ThemeToggler } from "@/widgets/theme-toggler/ui/ThemeToggler";

export const Header = () => {
  return (
    <HeaderContainer>
      <Heading>Поиск</Heading>
      <HeaderActions>
        <ThemeToggler />
      </HeaderActions>
    </HeaderContainer>
  );
};
