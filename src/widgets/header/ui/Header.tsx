import { useTranslation } from "react-i18next";
import { ThemeToggler } from "@/widgets/theme-toggler/ui/ThemeToggler";
import { LanguageToggler } from "@/widgets/language-toggler";

import {
  HeaderActions,
  HeaderContainer,
  HeaderHeading,
  StatusMessage,
  StyledHeader,
} from "./Header.styles";
import useOnlineStatus from "@/shared/hooks/useOnlineStatus";

export const Header = () => {
  const { t } = useTranslation("common");
  const { isOnline, showNotification } = useOnlineStatus();

  return (
    <HeaderContainer $isOnline={isOnline} $showNotification={showNotification}>
      <StyledHeader>
        <HeaderHeading>{t("search")}</HeaderHeading>
        <HeaderActions>
          <ThemeToggler />
          <LanguageToggler />
        </HeaderActions>
      </StyledHeader>
      {showNotification && (
        <StatusMessage>{isOnline ? t("online") : t("offline")}</StatusMessage>
      )}
    </HeaderContainer>
  );
};
