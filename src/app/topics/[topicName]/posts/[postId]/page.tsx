import React from "react";

interface PageProps {
  params: {
    topicName: string;
    postId: string;
  };
}

const page = ({ params }: PageProps) => {
  return (
    <div className="text-2xl font-light text-center">
      VIEW POST {params.postId} of {params.topicName}
    </div>
  );
};

export default page;
