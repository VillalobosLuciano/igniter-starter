import { useTheme } from "next-themes";
import NoSsr from "./NoSsr";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeSwitch = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <NoSsr>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="text-gray-400 transition-colors hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-200"
        onClick={() =>
          setTheme(
            theme === "dark" || resolvedTheme === "dark" ? "light" : "dark"
          )
        }
      >
        {theme === "dark" || resolvedTheme === "dark" ? (
          <FaSun className="h-5 w-5" />
        ) : (
          <FaMoon className="h-5 w-5 p-[1px]" />
        )}
      </button>
    </NoSsr>
  );
};

export default ThemeSwitch;
