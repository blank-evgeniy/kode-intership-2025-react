import { Translation } from "react-i18next";
import { Heading } from "@/shared/ui/heading/Heading";
import { ThemeToggler } from "@/widgets/theme-toggler/ui/ThemeToggler";
import { LanguageToggler } from "@/widgets/language-toggler";

import { HeaderActions, HeaderContainer } from "./Header.styles";

export const Header = () => (
  <HeaderContainer>
    <Heading>
      <Translation>{(t) => t("search")}</Translation>
    </Heading>
    <HeaderActions>
      <ThemeToggler />
      <LanguageToggler />
    </HeaderActions>
  </HeaderContainer>
);
