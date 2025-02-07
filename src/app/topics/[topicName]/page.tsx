import React from "react";

interface PageProps {
  params: {
    topicName: string;
  };
}

const page = ({ params }: PageProps) => {
  return (
    <div className="text-4xl font-light text-center">
      VIEW TOPIC PAGE: {params.topicName}
    </div>
  );
};

export default page;
