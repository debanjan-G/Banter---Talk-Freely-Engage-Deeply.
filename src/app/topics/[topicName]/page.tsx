import PostsContainer from "@/components/posts/PostsContainer";
import PostCard from "@/components/posts/PostCard";
import React from "react";
import CreatePostModal from "@/components/posts/CreatePostModal";
import { db } from "@/db";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    topicName: string;
  }>;
}

const page = async ({ params }: PageProps) => {
  const { topicName } = await params;

  // Fetch topic from DB
  const topic = await db.topic.findFirst({
    where: {
      slug: topicName,
    },
  });

  if (!topic) {
    return notFound();
  }

  // fetch posts from db
  const posts = await db.post.findMany({
    where: {
      topicId: topic.id,
    },
  });

  return (
    <div className="px-10 py-4 grid grid-cols-4 gap-10 place-content-center">
      {/* Left section (Posts) */}
      <div className="col-span-3 flex flex-col gap-6">
        <h1 className=" text-3xl font-bold">{decodeURIComponent(topicName)}</h1>
        <PostsContainer>
          {posts.length == 0 ? (
            <h1 className="text-lg">
              No posts have been created under this topic yet. Be the first to
              contribute, and your post will appear here.
            </h1>
          ) : (
            posts.map((post) => (
              <PostCard
                key={post.id}
                title={post.title}
                author={post.userId}
                comments="10"
              />
            ))
          )}
        </PostsContainer>
      </div>

      {/* Right section (Sidebar) */}
      <div className="col-span-1 flex flex-col">
        <CreatePostModal topicId={topic.id} />
        <div className="text-center border border-slate-400 rounded p-4">
          <h1 className="text-xl font-bold">{decodeURIComponent(topicName)}</h1>
          <p>{topic.description}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
