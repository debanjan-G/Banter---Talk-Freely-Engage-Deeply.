import PostShow from "@/components/posts/post-show";
import Link from "next/link";
import React from "react";
import paths from "@/utils/paths";
import CommentCreateForm from "@/components/comments/comment-create-form";
import CommentList from "@/components/comments/comment-list";
import { Suspense } from "react";
import { PostShowLoading } from "@/components/posts/post-show-loading";

interface PageProps {
  params: Promise<{
    topicName: string;
    postId: string;
  }>;
}

const page = async ({ params }: PageProps) => {
  const { postId, topicName } = await params;

  return (
    <div className="p-4">
      <Link href={paths.viewTopic(topicName)}>← back to {topicName}</Link>

      <Suspense fallback={<PostShowLoading />}>
        <PostShow postId={postId} />
      </Suspense>

      <CommentCreateForm postId={postId} startOpen />

      <CommentList postId={postId} />
    </div>
  );
};

export default page;
