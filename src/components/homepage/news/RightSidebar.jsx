import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
const RightSidebar = () => {
  return (
    <div >
      <h2 className="mb-5 font-bold text-lg">Login With</h2>
      <div className="flex flex-col gap-4">
        <button className="flex border border-blue-400  btn text-blue-400">
          <FaGoogle />
          Login with Google
        </button>
        <button className="flex  btn border border-gray-700">
          <FaGithub />
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
