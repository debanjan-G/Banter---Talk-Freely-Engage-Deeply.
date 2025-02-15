import React from "react";

interface PageProps {
  params: Promise<{
    topicName: string;
  }>;
}

const page = async ({ params }: PageProps) => {
  const { topicName } = await params;

  return (
    <div className="text-4xl font-light text-center">
      VIEW TOPIC PAGE: {decodeURIComponent(topicName)}
    </div>
  );
};

export default page;
