"use server";
import { signIn } from "@/auth";

export const signInAction = async () => {
  console.log("Signing in user...");

  return signIn("google");
};
