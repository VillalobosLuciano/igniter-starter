import ThemeSwitch from "./ThemeSwitch";
import IconButton from "./IconButton";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/router";
import Logo from "components/icons/Logo";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="mx-auto flex max-w-7xl justify-between px-4 pt-4 sm:px-6 lg:px-8 lg:pt-8">
      <div
        className="cursor-pointer"
        onClick={() => {
          router.push("/");
        }}
      >
        <Logo />
      </div>
      <div className="flex items-center space-x-4">
        <IconButton href="https://github.com/VillalobosLuciano/igniter-starter">
          <FaGithub className="h-5 w-5" />
        </IconButton>
        <ThemeSwitch />
      </div>
    </div>
  );
}
