import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink";
const Navbar = () => {
  return (
    <div className="flex container items-center mx-auto justify-between mt-5">
      <div></div>
      <ul className="flex items-center gap-5 text-gray-700">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"} className={"text-yellow-300"}>
            Career
          </NavLink>
        </li>
      </ul>

      <div className="flex  items-center gap-5">
        <Image
          src={userAvatar}
          width={40}
          height={40}
          alt="User avatar"
        ></Image>

        <Link href={"/login"}>
          {" "}
          <button className="btn px-10  bg-gray-700 text-white">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
