import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import { GoogleIcon } from "@/assets/Google";
import { FaceBookIcon } from "@/assets/Facebook";
import { TwitterIcon } from "@/assets/Twitter";
import { AppleIcon } from "@/assets/AppleIcon";
import axios from "axios";

export default function LogIn() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data1) => {
    let { data } = await axios.post("/api/user/Login", data1);
    console.log(data);
  };

  return (
    <>
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="outer_ring absolute -right-14 -top-44 -z-10 h-[500px] w-[500px] rotate-45 rounded-full bg-gradient-to-r from-teal-600 via-teal-500 to-teal-300 p-10 sm:-right-28 sm:-top-40">
          <div className="h-full w-full rounded-full bg-gray-100"></div>
        </div>
        <div className="flex w-4/5 place-items-center align-middle lg:max-w-screen-lg xl:max-w-screen-xl">
          <div className="col-span-12 m-auto grid grid-cols-12 rounded-2xl bg-white shadow-2xl sm:col-span-12 md:col-span-12 lg:col-span-12">
            <div className="z-10 col-span-12 grid grid-cols-12 text-center sm:col-span-12 md:col-span-12 lg:col-span-12">
              <div className="md-col-span-12 z-10 col-span-12 block px-5 py-5 sm:col-span-12 md:grid lg:col-span-8 lg:px-20 lg:py-20 xl:col-span-8">
                <div className="col-span-12 m-auto mb-5 text-center">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={1000}
                    height={1000}
                    className="mx-auto mb-4 w-40 md:w-60"
                  />
                  <h1 className="mb-4 text-2xl font-bold text-gray-700">
                    Welcome Back
                  </h1>
                </div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="z-10 col-span-12 grid"
                >
                  <div className="text-left">
                    <label
                      htmlFor="name"
                      className="mb-2 ml-4 block font-medium text-gray-600"
                    >
                      Your Email
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      {...register("UserEmail")}
                      placeholder="Add your email here"
                      className="mb-2 block w-full rounded-md border-gray-300 bg-gray-100 px-3 py-2 pl-4 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm lg:text-base"
                    />
                  </div>
                  <div className="text-left">
                    <label
                      htmlFor="password"
                      className="mb-2 ml-4 block font-medium text-gray-600"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      {...register("UserPassword")}
                      placeholder="Enter your Password"
                      className="mb-2 block w-full rounded-md border-gray-300 bg-gray-100 px-3 py-2 pl-4 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm lg:text-base"
                    />
                  </div>
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center">
                      <Link
                        href="#"
                        className="text-sm font-medium text-blue-500 hover:text-blue-700"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="#"
                        className="ml-2 text-sm font-medium text-gray-700"
                      >
                        Create Account
                      </Link>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="m-auto w-1/2 rounded-md border border-transparent bg-teal-500 px-4 py-2 text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      LogIn
                    </button>
                  </div>
                </form>
                <div className="z-10 col-span-12 m-auto mt-7 text-center">
                  <div className="block items-center justify-center sm:flex">
                    <span className="m-0 block h-px w-full bg-black sm:mr-5 sm:flex sm:w-40"></span>
                    <span className="text-center text-lg text-black">
                      Or Continue with
                    </span>
                    <span className="m-0 block h-px w-full bg-black sm:ml-5 sm:flex sm:w-40"></span>
                  </div>
                  <div className="mt-7 flex flex-wrap justify-center">
                    <Link href="#" className="mr-2 h-8 w-8 sm:mr-10">
                      {/* Google */}
                      <GoogleIcon width={50} height={30} />
                    </Link>
                    <Link href="#" className="mr-2 h-8 w-8 sm:mr-10">
                      {/* FaceBook */}
                      <FaceBookIcon width={50} height={30} />
                    </Link>
                    <Link href="#" className="mr-2 h-8 w-8 sm:mr-10">
                      {/* Twitter */}
                      <TwitterIcon width={50} height={30} />
                    </Link>
                    <Link href="#" className="mr-2 h-8 w-8 sm:mr-10">
                      {/* Apple */}
                      <AppleIcon width={50} height={30} />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md-col-span-12 col-span-12 grid rounded-bl-2xl rounded-br-2xl bg-teal-500 px-10 py-10 sm:col-span-12 md:rounded-bl-2xl md:rounded-tr-none lg:col-span-4 lg:rounded-bl-none lg:rounded-tr-2xl xl:col-span-4">
                <Image
                  width={1000}
                  height={1000}
                  src="/login.png"
                  alt="sidebar"
                  className="m-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
