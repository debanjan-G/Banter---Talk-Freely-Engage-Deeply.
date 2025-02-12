"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@heroui/react";

import Link from "next/link";
import SignupBtn from "./SignupBtn";
import SignoutBtn from "./SignoutBtn";
import { useState } from "react";
import { useSession } from "next-auth/react";
import SigninBtn from "./SigninBtn";
import { signOutAction } from "@/actions";

export const SearchIcon = ({
  size = 24,
  strokeWidth = 1.5,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={height || size}
      role="presentation"
      viewBox="0 0 24 24"
      width={width || size}
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default function Header() {
  const session = useSession();

  const handleSignout = async () => {
    await signOutAction();
  };

  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Link href="/" className="font-extrabold text-2xl">
            Banter
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="center">
        <Input
          classNames={{
            base: " max-w-full sm:max-w-[15rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        {session.data?.user ? (
          <Dropdown placement="bottom-end">
            {/* <DropdownTrigger> defines what should be clicked to make the dropdown menu appear */}
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Debanjan Ghosal"
                size="sm"
                src={session.data.user?.image || ""}
              />
            </DropdownTrigger>

            {/* Actual content of the dropdown menu is defined by <Dropdown Menu> */}
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{session.data.user.email}</p>
              </DropdownItem>
              <DropdownItem key="logout">
                <p
                  onClick={handleSignout}
                  className="text-red-500 font-semibold"
                >
                  Logout
                </p>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <>
            <SignupBtn />
            <SigninBtn />
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
}
