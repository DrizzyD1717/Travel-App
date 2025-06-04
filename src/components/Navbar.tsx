import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NAV_LINKS } from "../../constants";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex justify-between max-container px-12 relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" height={29} width={74}></Image>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className="regular-16 flex items-center text-gray-500 cursor-pointer hover:font-bold pb-1.5 transition-all "
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="hidden lg:flex justify-center items-center">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        ></Button>
      </div>

      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointr lg:hidden"
      ></Image>
    </nav>
  );
};

export default Navbar;
