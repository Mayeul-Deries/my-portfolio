import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";

export const ThemeChanger = () => {
  const { setTheme, theme } = useTheme();
  return (
    <a
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative flex items-center justify-center cursor-pointer select-none rounded-sm p-2 transition-colors hover:bg-transparent focus:outline-none"
    >
      <Sun className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
    </a>
  );
};
