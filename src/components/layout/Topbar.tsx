import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconNotification } from "../icons";
import { IconSearch } from "../icons";

const TopBar = () => {
  return (
    <div className="flex items-center justify-between px-5 py-4 bg-grayfc">
      <div className="flex items-center gap-[82px] flex-1">
        <Logo />
        <Search />
      </div>
      <User />
    </div>
  );
};

function Logo({}) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        width={173}
        height={35}
        src="/logo-full.png"
        priority
        alt="Yariga"
      />
    </Link>
  );
}

function Search({}) {
  return (
    <div className="px-[10px] rounded-lg bg-grayf4 flex items-center gap-2 flex-[0_1_405px] h-[38px]">
      <IconSearch></IconSearch>
      <input
        type="text"
        placeholder="Search Property, Customer etc"
        className="w-full text-xs font-normal bg-transparent outline-none text-primary placeholder:text-gray80"
      />
    </div>
  );
}

function User({}) {
  return (
    <div className="flex items-center flex-shrink-0 gap-5">
      <span className="flex-shrink-0">
        <IconNotification></IconNotification>
      </span>
      <div className="flex items-center flex-shrink-0 gap-[10px]">
        <Image
          src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80"
          alt="mac"
          width={40}
          height={40}
          className="object-cover w-10 h-10 rounded-full"
          priority
        ></Image>
        <div className="flex flex-col">
          <h4 className="font-semibold">Hawkins Maru</h4>
          <span className="text-gray80">Company Manager</span>
        </div>
      </div>
    </div>
  );
}
export default TopBar;
