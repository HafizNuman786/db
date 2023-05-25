import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import { GoogleIcon } from "@/assets/Google";
import { FaceBookIcon } from "@/assets/Facebook";
import { TwitterIcon } from "@/assets/Twitter";
import { AppleIcon } from "@/assets/AppleIcon";
import axios from "axios";
export default function Home() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    await axios.post("/api/user/Signup", data);
    console.log(data);
  };
  // const onSubmit = async () => {
  //   try {
  //     const res = await axios.post(
  //       'https://api.ote-godaddy.com/v1/domains/available',
  //       ['example.guru'],
  //       {
  //         headers: {
  //           'Authorization': 'sso-key 3mM44Uch7Rjz9N_SUZxTk4Vp3KopHWfZee3Bn:CyfZSX4YzobL47GRw3juvy',
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     );
  //     console.log(res)
  //     // res.status(200).json(response.data);
  //   } catch (error) {
  //     console.error(error);
  //     // res.status(500).json({ error: 'Internal Server Error' });
  //   }
  // }

  // useEffect(() => {
  //   onSubmit()
  // }, [])
  return (

    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <div className="flex  w-4/5 place-items-center  align-middle lg:max-w-screen-lg xl:max-w-screen-xl">
        <div className="col-span-12 m-auto grid grid-cols-12 rounded-2xl bg-white shadow-2xl sm:col-span-12 md:col-span-12 lg:col-span-12">
          <div className="z-10 col-span-12 grid grid-cols-12 text-center sm:col-span-12 md:col-span-12 lg:col-span-12">
            <div className="md-col-span-12 z-10 col-span-12 block px-5 py-5 sm:col-span-12 md:grid lg:col-span-8 lg:px-20 lg:py-10 xl:col-span-8">
              <div className="col-span-12 m-auto  text-center">
                <Image
                  width={1000}
                  height={1000}
                  src="/logo.png"
                  alt="Logo"
                  layout="responsive"
                  objectFit="contain"
                  objectPosition="center"
                  className=" w-40 md:mx-auto md:w-60"
                />

                <h1 className=" text-2xl font-bold text-gray-700">
                  Create Account
                </h1>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="z-10 col-span-12 grid">
                <div className="text-left">
                  <label
                    htmlFor="name"
                    className="mb-2 ml-4 block font-medium text-gray-600"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    {...register("UserName")}
                    placeholder="Add your name here"
                    className="mb-2 block w-full rounded-md border-gray-300 bg-gray-100 px-3 py-2 pl-4 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm lg:text-base"
                  />
                </div>
                <div className="text-left">
                  <label
                    htmlFor="name"
                    className="mb-2 ml-4 block font-medium text-gray-600"
                  >
                    Your Mobile Number
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    {...register("UserMobileNumber")}
                    placeholder="Add your mobile number here"
                    className="mb-2 block w-full rounded-md border-gray-300 bg-gray-100 px-3 py-2 pl-4 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm lg:text-base"
                  />
                </div>
                <div className="text-left">
                  <label
                    htmlFor="name"
                    className="mb-2 ml-4 block font-medium text-gray-600"
                  >
                    Your Email Here
                  </label>
                  <input
                    type="email"
                    id="name"
                    name="name"
                    required
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
                    required
                    {...register("UserPassword")}
                    placeholder="Enter your Password"
                    className="mb-2 block w-full rounded-md border-gray-300 bg-gray-100 px-3 py-2 pl-4 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm lg:text-base"
                  />
                </div>
                <div className="mb-5 flex items-center justify-start">
                  <div className="flex items-center">
                    <p className="text-sm font-medium">
                      Already Register
                      <Link
                        href="#"
                        className="ml-1 text-sm font-medium text-blue-500 hover:text-blue-700"
                      >
                        Sign in
                      </Link>
                    </p>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="m-auto w-1/2 rounded-md border border-transparent bg-teal-500 px-4 py-2 text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Create Account
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
                <div className="mt-7 flex flex-wrap  justify-center">
                  <Link href="#" className="mr-2 h-8 w-8 sm:mr-10">
                    {/* Google */}
                    <GoogleIcon width={50} height={30} />
                  </Link>
                  <Link href="#" className="mr-2 h-8 w-8 sm:mr-10">
                    {/* Facebook */}
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
  );
}
