import { useTheme } from "next-themes";
import NoSsr from "./NoSsr";
import { SunIcon } from "@heroicons/react/solid";
import { MoonIcon } from "@heroicons/react/solid";

const ThemeSwitch = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <NoSsr>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="text-zinc-600 transition-colors hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-white"
        onClick={() =>
          setTheme(
            theme === "dark" || resolvedTheme === "dark" ? "light" : "dark"
          )
        }
      >
        {theme === "dark" || resolvedTheme === "dark" ? (
          <SunIcon className="h-6 w-6" />
        ) : (
          <MoonIcon className="h-6 w-6" />
        )}
      </button>
    </NoSsr>
  );
};

export default ThemeSwitch;
