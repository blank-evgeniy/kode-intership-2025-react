import { useTheme } from "@/app/providers/theme/useTheme";
import { MoonIcon } from "@/shared/icons/MoonIcon";
import { SunIcon } from "@/shared/icons/SunIcon";
import { Button } from "@/shared/ui/button/Button";

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button onClick={handleThemeChange}>
      {theme === "light" ? (
        <SunIcon width={20} height={20} />
      ) : (
        <MoonIcon width={20} height={20} />
      )}
    </Button>
  );
};
