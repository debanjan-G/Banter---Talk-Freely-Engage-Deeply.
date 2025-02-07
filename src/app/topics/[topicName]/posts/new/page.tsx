import React from "react";

interface PageProps {
  params: {
    topicName: string;
  };
}

const page = ({ params }: PageProps) => {
  return (
    <div className="text-2xl font-light text-center">
      CREATE POST related to {params.topicName}
    </div>
  );
};

export default page;
