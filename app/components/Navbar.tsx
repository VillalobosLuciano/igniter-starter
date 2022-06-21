import ThemeSwitch from "./ThemeSwitch";
import IconButton from "./IconButton";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/router";
import Logo from "../public/igniter-logo.svg";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="mx-auto mt-6 flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <div className="flex">
        <div
          onClick={() => router.push("/")}
          className="relative cursor-pointer"
        >
          <Image alt="igniter logo" src={Logo} width={120} height={45} />
        </div>
      </div>
      <div className="flex space-x-4">
        <IconButton href="https://github.com/VillalobosLuciano/igniter-starter">
          <FaGithub className="h-6 w-6 p-[1px]" />
        </IconButton>
        <ThemeSwitch />
      </div>
    </div>
  );
}
