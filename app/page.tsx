"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Página de Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
          <div className="flex justify-center mb-6">
            <Image
              src="/innoscripta-logo-blue.svg"
              alt="Logo"
              width={200}
              height={48}
            />
          </div>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                placeholder="Type your email"
                required
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                placeholder="Type your password"
                required
              />
            </div>

            <Link href="/news">
              <button
                type="submit"
                className="w-full py-2 bg-darkBlue text-white font-bold rounded-md hover:bg-cyan-700 transition duration-200"
              >
                Login
              </button>
            </Link>
          </form>
          <p className="mt-4 text-center text-sm">
            Don't have an account?{" "}
            <a href="#" className="text-darkBlue hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
