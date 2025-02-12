import React from "react";

interface PageProps {
  params: Promise<{
    topicName: string;
    postId: string;
  }>;
}

const page = async ({ params }: PageProps) => {
  const { postId, topicName } = await params;
  return (
    <div className="text-2xl font-light text-center">
      VIEW POST {postId} of {topicName}
    </div>
  );
};

export default page;
