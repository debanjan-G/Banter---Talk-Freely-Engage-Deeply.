"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Profile = () => {
  const session = useSession();

  return (
    <div className="flex items-center justify-center p-4 gap-4">
      {session.data?.user ? (
        <div className="w-1/2 mx-auto">
          <p>{session.data.user.name}</p>
          <p>{session.data.user.email}</p>
        </div>
      ) : (
        <div>
          <h1 className="text-red-600 font-thin text-xl">
            Please Signin to access this page!
          </h1>
        </div>
      )}
      <Link href="/" className="outline outline-slate-300 rounded p-2">
        Home
      </Link>
    </div>
  );
};

export default Profile;
