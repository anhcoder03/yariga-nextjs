import Link from "next/link";
import React from "react";
import { sidebarLinks } from "@/constants/general.const";
import { useRouter } from "next/router";
import { TSidebarLink } from "@/types/general.types";

const Sidebar = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <div className="px-4 py-6 bg-grayfc">
      {sidebarLinks.map((link) => (
        <SidebarLink
          isActive={pathname === link.path}
          key={link.title}
          link={link}
        ></SidebarLink>
      ))}
    </div>
  );
};
interface ISidebarLinkProps {
  link: TSidebarLink;
  isActive: boolean;
}
function SidebarLink({ link, isActive }: ISidebarLinkProps) {
  return (
    <Link
      href={link.path}
      className={`flex items-center px-6 py-4 text-base font-bold gap-c10 text-gray80 rounded-xl ${
        isActive ? "bg-primary text-grayfc" : "hover:text-primary"
      }`}
    >
      <span>{link.icon}</span>
      <span>{link.title}</span>
    </Link>
  );
}

export default Sidebar;
