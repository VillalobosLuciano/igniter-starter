import ThemeSwitch from "./ThemeSwitch";
import IconButton from "./IconButton";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/router";
import Logo from "../public/igniter-logo.svg";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 pt-4 sm:px-6 lg:px-8 lg:pt-8">
      <div className="flex">
        <div
          onClick={() => router.push("/")}
          className="relative cursor-pointer"
        >
          <Image alt="igniter logo" src={Logo} width={130} height={50} />
        </div>
      </div>
      <div className="flex space-x-4">
        <IconButton href="https://github.com/VillalobosLuciano/igniter-starter">
          <FaGithub className="h-5 w-5" />
        </IconButton>
        <ThemeSwitch />
      </div>
    </div>
  );
}
