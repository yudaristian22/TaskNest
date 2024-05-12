"use client";
import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <button
      onClick={() => signIn("google")}
      className=" py-2 px-4 ml-2 rounded-md bg-black text-white  "
    >
      Login
    </button>
  );
}
