import PostList from "@/components/posts/post-list";
import PostsContainer from "@/components/posts/PostsContainer";
import { getPostsBySearch } from "@/db/queries/post-query";
import { redirect } from "next/navigation";
import React from "react";

interface SearchParamsType {
  searchParams: Promise<{
    term: string;
  }>;
}

const page = async ({ searchParams }: SearchParamsType) => {
  const { term } = await searchParams;

  if (!term) redirect("/");

  return (
    <div className="p-4">
      <PostsContainer>
        <PostList fetchPost={() => getPostsBySearch(term)} />
      </PostsContainer>
    </div>
  );
};

export default page;
