import React from "react";
import { db } from "@/db";
import Link from "next/link";
import paths from "@/utils/paths";

const TopicList = async () => {
  const topics = await db.topic.findMany({});
  return (
    <div className="flex flex-col gap-4 border border-gray-400 p-4 rounded">
      <h1 className="text-center text-xl font-semibold">Topics</h1>
      {topics.map((topic) => (
        <Link
          href={paths.viewTopic(topic.slug)}
          className="border border-blue-900 bg-blue-200 text-blue-700 hover:bg-blue-100 transition-all duration-200 p-2 rounded text-sm"
          key={topic.id}
        >
          {topic.slug}
        </Link>
      ))}
    </div>
  );
};

export default TopicList;
