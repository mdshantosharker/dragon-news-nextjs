"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children,className }) => {
  const pathname = usePathname();
  return (
    <div>
      <Link
        className={`${pathname === href ? "border-b-2 border-purple-500 " : ""} ${className}`}
        href={href}
      >
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
