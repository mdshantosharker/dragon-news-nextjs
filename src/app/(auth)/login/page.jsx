"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
  };

  console.log(errors);
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-16 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6">
          Login Your account
        </h2>

        <form onSubmit={handleSubmit(handleLogin)} className="space-y-2">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input"
              {...register("email", { required: "Email field is required" })}
              placeholder="Type your email"
            />
          </fieldset>

          {errors.password && (
            <p className="text-red-400">{errors.email.message}</p>
          )}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input"
              {...register("password", {
                required: "Password field is required",
              })}
              placeholder="Type your Password"
            />
          </fieldset>
          {errors.password && (
            <p className="text-red-400">{errors.password.message}</p>
          )}
          <button className="btn bg-gray-700 text-white w-full ">Login</button>
        </form>

        <p className="mt-2">
          Don't have an account ?{" "}
          <Link className="text-blue-500 font-bold" href={"/register"}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
