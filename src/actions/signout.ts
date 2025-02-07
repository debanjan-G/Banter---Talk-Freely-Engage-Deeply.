"use server";

import { signOut } from "@/auth";

export const signOutAction = async () => {
  console.log("Signing out user...");

  return signOut();
};
