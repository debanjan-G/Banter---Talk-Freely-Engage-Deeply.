import { db } from "@/db";
import PostContent from "./post-content";
import { notFound } from "next/navigation";

interface PostShowProps {
  postId: string;
}

export default async function PostShow({ postId }: PostShowProps) {
  const post = await db.post.findFirst({
    where: {
      id: postId,
    },
  });

  if (!post) return notFound();

  return (
    <>
      {/* <PostContent> display only the title and content of the post */}
      <PostContent title={post.title} content={post.content} />
    </>
  );
}
