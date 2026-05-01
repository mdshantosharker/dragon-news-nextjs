"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleRegister = async (data) => {
    const { name, email, password, photo } = data;
    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/",
    });

    console.log(res, error);
    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("SignUp Successfully");
    }
  };
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-16 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6">
          Register Your account
        </h2>

        <form onSubmit={handleSubmit(handleRegister)} className="space-y-2">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              className="input"
              {...register("name", { required: "name field is required" })}
              placeholder="Type your name"
            />
          </fieldset>
          {errors.password && (
            <p className="text-red-400">{errors.name.message}</p>
          )}

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo</legend>
            <input
              type="text"
              className="input"
              {...register("photo", { required: "photo field is required" })}
              placeholder="Enter your photo"
            />
          </fieldset>
          {errors.password && (
            <p className="text-red-400">{errors.photo.message}</p>
          )}

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
          <button className="btn bg-gray-700 text-white w-full ">
            Register
          </button>
        </form>

        <p className="mt-2">
          Already have an account ?{" "}
          <Link className="text-blue-500 font-bold" href={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
