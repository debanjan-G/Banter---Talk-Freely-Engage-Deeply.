"use server";
import { signIn } from "@/auth";
import { signOut } from "@/auth";

export const signInAction = async () => {
  return signIn("google");
};

export const signOutAction = async () => {
  return signOut();
};
