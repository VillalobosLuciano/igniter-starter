import Image from "next/image";
import Logo from "../public/igniter-logo.svg";
import ThemeSwitch from "./ThemeSwitch";
import IconButton from "./IconButton";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="mx-auto flex max-w-7xl justify-between px-4 pt-4 sm:px-6 lg:px-8 lg:pt-8">
      <Image
        onClick={() => {
          router.push("/");
        }}
        className="cursor-pointer"
        src={Logo}
        alt="logo"
        width={100}
      />
      <div className="flex items-center space-x-4">
        <IconButton href="https://github.com/VillalobosLuciano/igniter-starter">
          <FaGithub className="h-5 w-5" />
        </IconButton>
        <ThemeSwitch />
      </div>
    </div>
  );
}
