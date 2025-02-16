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

  return (
    <div className="px-10 py-4 grid grid-cols-4 gap-6 place-content-center">
      {/* Left section (Posts) */}
      <div className="col-span-3 flex flex-col">
        <h1 className=" text-3xl font-bold my-2">
          {decodeURIComponent(topicName)}
        </h1>
        <PostsContainer>
          {/* Dummy Posts */}
          <PostCard title="Implementing Charts" author="wpa" comments="35" />
          <PostCard title="Making an app" author="ramaz" comments="17" />
          <PostCard title="My project is done!" author="mito" comments="10" />
        </PostsContainer>
      </div>

      {/* Right section (Sidebar) */}
      <div className="col-span-1 flex flex-col">
        <CreatePostModal />
        <div className="text-center border border-slate-400 rounded p-4">
          <h1 className="text-xl font-bold">{decodeURIComponent(topicName)}</h1>
          <p>{topic.description}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
