import PostsContainer from "@/components/posts/PostsContainer";
import React from "react";
import CreatePostModal from "@/components/posts/CreatePostModal";
import { db } from "@/db";
import { notFound } from "next/navigation";
import PostList from "@/components/posts/post-list";
import { fetchPostsByTopicName } from "@/db/queries/post-query";

interface PageProps {
  params: Promise<{
    topicName: string;
  }>;
}

const page = async ({ params }: PageProps) => {
  const { topicName } = await params;
  console.log("TOPIC NAME = ", topicName);

  const normalizedTopicName = topicName.replace(/%20/g, " "); //replacing all occurens of "%20" with " "

  // Fetch topic from DB
  const topic = await db.topic.findFirst({
    where: {
      slug: normalizedTopicName,
    },
  });

  if (!topic) {
    return notFound();
  }

  return (
    <div className="px-10 py-4 grid grid-cols-4 gap-10 place-content-center">
      {/* Left section (Posts) */}
      <div className="col-span-3 flex flex-col gap-6">
        <h1 className=" text-3xl font-bold">{decodeURIComponent(topicName)}</h1>
        <PostsContainer>
          <PostList fetchPost={() => fetchPostsByTopicName(topicName)} />
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
