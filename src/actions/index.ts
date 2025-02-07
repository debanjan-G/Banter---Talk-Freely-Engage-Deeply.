"use server";
import { signIn } from "@/auth";
import { signOut } from "@/auth";

export const signInAction = async () => {
  console.log("Signing in user...");

  return signIn("google");
};

export const signOutAction = async () => {
  console.log("Signing out user...");

  return signOut();
};
