import PostShow from "@/components/posts/post-show";
import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";

interface PageProps {
  params: Promise<{
    topicName: string;
    postId: string;
  }>;
}

const page = async ({ params }: PageProps) => {
  const { postId, topicName } = await params;
  // fetch post from DB
  const post = await db.post.findFirst({
    where: {
      id: postId,
    },
  });

  if (!post) {
    return notFound();
  }

  return <PostShow title={post.title} content={post.content} />;
};

export default page;
