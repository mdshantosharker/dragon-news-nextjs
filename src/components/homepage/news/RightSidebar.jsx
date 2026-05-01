"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
const RightSidebar = () => {
  const handleGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  const handleGithub = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };
  return (
    <div>
      <h2 className="mb-5 font-bold text-lg">Login With</h2>
      <div className="flex flex-col gap-4">
        <button
          className="flex border border-blue-400  btn text-blue-400"
          onClick={handleGoogle}
        >
          <FaGoogle />
          Login with Google
        </button>
        <button
          className="flex  btn border border-gray-700"
          onClick={handleGithub}
        >
          <FaGithub />
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
