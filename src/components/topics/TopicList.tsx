import React from "react";
import { db } from "@/db";
import Link from "next/link";
import paths from "@/utils/paths";
import ChipComponent from "../ChipComponent";
import { Divider } from "@heroui/react";

const TopicList = async () => {
  const topics = await db.topic.findMany({});
  return (
    <div className="border border-gray-400 p-4 rounded">
      <h1 className="text-center text-2xl font-semibold mb-2">Topics</h1>
      <Divider className="mb-4" />
      <div className="flex flex-wrap justify-start gap-4">
        {topics.map((topic) => (
          <Link href={paths.viewTopic(topic.slug)} key={topic.id}>
            <ChipComponent>{topic.slug}</ChipComponent>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopicList;
