"use server";

import { redirect } from "next/navigation";

export const searchPostAction = async (formData: FormData) => {
  console.log("Search Post server action called.");

  const term = formData.get("term");

  if (!term) redirect("/");

  redirect(`/search?term=${term}`);
};
