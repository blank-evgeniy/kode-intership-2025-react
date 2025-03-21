import { Heading } from "@/shared/ui/heading/Heading";
import { HeaderActions, HeaderContainer } from "./Header.styles";
import { ThemeToggler } from "@/widgets/theme-toggler/ui/ThemeToggler";
import { Translation } from "react-i18next";

export const Header = () => (
  <HeaderContainer>
    <Heading>
      <Translation>{(t) => t("search")}</Translation>
    </Heading>
    <HeaderActions>
      <ThemeToggler />
    </HeaderActions>
  </HeaderContainer>
);
