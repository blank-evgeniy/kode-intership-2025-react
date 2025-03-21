import { Button } from "@/shared/ui/button/Button";
import { useTranslation } from "react-i18next";

export const LanguageToggler = () => {
  const { t, i18n } = useTranslation("common");

  const changeLanguage = () => {
    const lng = i18n.language === "ru" ? "en" : "ru";
    i18n.changeLanguage(lng);
  };

  return <Button onClick={() => changeLanguage()}>{t("language")}</Button>;
};
