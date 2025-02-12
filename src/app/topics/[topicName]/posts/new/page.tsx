import React from "react";

interface PageProps {
  params: Promise<{
    topicName: string;
  }>;
}

const page = async ({ params }: PageProps) => {
  const { topicName } = await params;
  return (
    <div className="text-2xl font-light text-center">
      CREATE POST related to {topicName}
    </div>
  );
};

export default page;
