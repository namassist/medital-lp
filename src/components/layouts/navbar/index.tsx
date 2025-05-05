"use client";

import React from "react";
import clsx from "clsx";
// import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "usehooks-ts";

interface MenuItem {
  name: string;
  href: string;
}

interface NavbarProps {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  menus: MenuItem[];
}

export default function Navbar({ logo, menus }: NavbarProps) {
  const isDesktop = useMediaQuery("(min-width: 769px)");
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <>
      <nav className="flex gap-[32px] items-center justify-between px-8 py-4">
        <img src={logo.src} alt={logo.alt} className="w-14 h-14" />
        {/* <Image
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          priority
        /> */}

        {!isDesktop && (
          <Drawer
            direction="bottom"
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            onOpenChange={(open) => setMobileMenuOpen(open)}
          >
            <DrawerTrigger>
              <MenuIcon />
            </DrawerTrigger>
            <DrawerContent>
              <div className="py-10">
                <DrawerTitle className="sr-only">Title</DrawerTitle>
                <ul className="flex flex-col flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-neutral-300 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                  {menus.map((link: MenuItem, index: number) => (
                    <li
                      className="h-3/4 flex items-center justify-center relative"
                      key={index}
                    >
                      <Link
                        className={clsx(
                          "capitalize flex w-full items-center justify-center px-3 py-3 text-gray-950 transition"
                        )}
                        href={link.href}
                        onClick={() => {}}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </DrawerContent>
          </Drawer>
        )}

        {isDesktop && (
          <ul
            className="hidden lg:flex gap-[28] items-center sm:items-start p-4"
            suppressHydrationWarning
          >
            {menus.map((menu) => (
              <Link
                key={menu.name}
                href={menu.href}
                className="text-[#0170b9] hover:text-[#808285]"
              >
                {menu.name}
              </Link>
            ))}
          </ul>
        )}
      </nav>
      <hr className="border-t border-[#eaeaea] w-full" />
    </>
  );
}
