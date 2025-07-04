import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "../../constants";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center mb-24">
      <div className=" px-6 lg:px-20 2xl:px-0 mx-auto max-w-[1440px] flex w-full flex-col  gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image
              src="/hilink-logo.svg"
              alt="logo"
              width={74}
              height={29}
            ></Image>
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn key={columns.title} title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-400">
                  {columns.links.map((link) => (
                    <Link key={link} href="">
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row items-center"
                  >
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="medium-14 whitespace-nowrap text-blue-950">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-400">
                  {SOCIALS.links.map((link) => (
                    <Link href="" key={link}>
                      <Image
                        src={link}
                        alt="logo"
                        width={24}
                        height={24}
                      ></Image>
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-200 "></div>
        <p className="regular-14 w-full text-center text-gray-400">
          2023 Hilink | All rights reserved
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children?: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
