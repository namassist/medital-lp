import Link from "next/link";

interface MenuItem {
  name: string;
  href: string;
}

interface FooterProps {
  copyrightText: string;
  menus: MenuItem[];
}

export default function Footer({ copyrightText, menus }: FooterProps) {
  return (
    <footer className="bg-[#eeeeee] py-5">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0">
          <div className="w-full lg:w-4/12 py-5 ">
            <p className="text-[#484f58] text-[15px] text-center lg:text-left">
              {copyrightText}
            </p>
          </div>
          <div className="w-full lg:w-8/12">
            <ul className="flex flex-col lg:flex-row gap-2 lg:gap-[28] justify-end items-center lg:items-start">
              {menus.map((menu) => (
                <Link
                  key={menu.name}
                  href={menu.href}
                  className="text-[#0170b9] hover:text-[#808285] capitalize"
                >
                  {menu.name}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
