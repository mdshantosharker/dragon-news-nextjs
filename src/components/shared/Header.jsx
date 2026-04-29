import React from "react";
import headerLogo from "@/assets/logo.png";
import Image from "next/image";
import { compareAsc, format } from "date-fns";
const Header = () => {
  return (
    <div className="text-center py-8 space-y-2">
      <div className="flex justify-center items-center">
        <Image src={headerLogo} width={300} height={200} alt="logo"></Image>
      </div>
      <h1>Journalism Without Fear or Favour</h1>
      
      <p>{format(new Date(), "EEEE, LLLL dd, y")}</p>
    </div>
  );
};

export default Header;
