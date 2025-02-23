"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@heroui/react";

import Link from "next/link";
import SignupBtn from "./SignupBtn";
import { signOut, useSession } from "next-auth/react";
import SigninBtn from "./SigninBtn";
import SearchInput from "./search/SearchInput";
import { Suspense } from "react";

interface SearchIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
  width?: number | string;
  height?: number | string;
}

export const SearchIcon: React.FC<SearchIconProps> = ({
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

  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Link href="/" className="font-extrabold text-2xl">
            Banter.
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="center">
        <Suspense>
          <SearchInput />
        </Suspense>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        {session.status !== "loading" ? (
          session.data?.user ? (
            <Dropdown placement="bottom-end">
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

              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">{session.data.user.email}</p>
                </DropdownItem>
                <DropdownItem key="logout">
                  <p
                    onClick={() => signOut()}
                    className="text-red-500 font-semibold cursor-pointer"
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
          )
        ) : null}
      </NavbarContent>
    </Navbar>
  );
}
