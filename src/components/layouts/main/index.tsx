import React from "react";
import Navbar from "../navbar";
import { footerMenus, menus } from "@/constant/menus";
import Footer from "../footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar
        logo={{
          src: "/medital_logo.png",
          alt: "Medital logo",
          width: 90,
          height: 90,
        }}
        menus={menus}
      />
      {children}
      <Footer
        copyrightText={`Copyright © ${new Date().getFullYear()} Sistem Rekam Medis`}
        menus={footerMenus}
      />
    </main>
  );
}
