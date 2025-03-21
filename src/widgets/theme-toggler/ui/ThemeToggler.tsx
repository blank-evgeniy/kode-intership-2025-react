import { useTheme } from "@/app/providers/theme/useTheme";
import { MoonIcon } from "@/shared/icons/MoonIcon";
import { SunIcon } from "@/shared/icons/SunIcon";
import { StyledThemeToggler } from "./ThemeToggler.styles";

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <StyledThemeToggler onClick={handleThemeChange}>
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </StyledThemeToggler>
  );
};
