"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log(session, user);

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login"); // redirect to login page
        },
      },
    });
  };
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

      {isPending ? (
        <span className="loading loading-infinity  loading-xl"></span>
      ) : user ? (
        <>
          <div className="flex  items-center gap-5">
            <h2>Hello , {user?.name}</h2>
            <Image
              className=""
              src={user?.image || userAvatar}
              width={50}
              height={50}
              alt="User avatar"
            ></Image>

            <Link href={""}>
              <button
                onClick={handleSignOut}
                className="btn px-10  bg-red-700 text-white"
              >
                LogOut
              </button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <Link href={"/login"}>
            <button
              onClick={handleSignOut}
              className="btn px-10  bg-gray-700  text-white"
            >
              LogIn
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
