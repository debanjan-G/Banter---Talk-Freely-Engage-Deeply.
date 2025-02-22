import PostShow from "@/components/posts/post-show";
import Link from "next/link";
import React from "react";
import paths from "@/utils/paths";
import CommentCreateForm from "@/components/comments/comment-create-form";
import CommentList from "@/components/comments/comment-list";
import { getCommentsByPostId } from "@/db/queries/comment-query";

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
      <PostShow postId={postId} />;
      <CommentCreateForm postId={postId} startOpen />
      <CommentList postId={postId} />
    </div>
  );
};

export default page;
