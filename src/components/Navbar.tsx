"use client";
import Link from "next/link";
import { useState } from "react";

function MobileNav({ open, setOpen }: NavbarProps) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
        {" "}
        {/*logo container*/}
        <a className="text-xl font-semibold" href="/">
          <img
            src="../android-chrome-512x512.png"
            className="w-10 h-10 rounded-full mr-4"
          ></img>
        </a>
      </div>
      <div className="flex flex-col ml-4">
        <Link
          className="text-xl font-medium my-4"
          href={"/charities"}
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Charities
        </Link>
        <Link
          className="text-xl font-normal my-4"
          href={"/account"}
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Account
        </Link>
        <Link
          className="text-xl font-normal my-4"
          href={"/signup"}
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          SignUp
        </Link>
        <Link
          className="text-xl font-normal my-4"
          href={"/signin"}
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Signin
        </Link>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-center">
        <a className="text-2xl font-semibold" href="/">
          <img
            src="../android-chrome-512x512.png"
            className="w-10 h-10 rounded-full mr-4"
          ></img>
        </a>
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        <div className="hidden md:flex">
          <Link className="px-5" href={"/charities"}>
            Charities
          </Link>
          <Link className="px-5" href={"/account"}>
            Account
          </Link>
          <Link className="px-5" href={"/signup"}>
            SignUp
          </Link>
          <Link className="px-5" href={"/signin"}>
            Signin
          </Link>
        </div>
      </div>
    </nav>
  );
}