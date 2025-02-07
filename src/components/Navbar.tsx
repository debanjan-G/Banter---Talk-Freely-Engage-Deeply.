import React from "react";
import Link from "next/link";
import paths from "@/utils/paths";

const Navbar = () => {
  return (
    <div className="mb-4 ">
      <div className="p-2 text-2xl font-extrabold text-slate-700 flex justify-start">
        <Link href={paths.homePage()}>Banter</Link>
      </div>
      <hr className="border border-t-2" />
    </div>
  );
};

export default Navbar;
