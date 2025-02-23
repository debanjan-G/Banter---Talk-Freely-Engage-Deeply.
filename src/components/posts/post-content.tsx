"use client";

import React from "react";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";

interface postContentProps {
  title: string;
  content: string;
}

const PostContent = ({ title, content }: postContentProps) => {
  return (
    <div className="m-4 p-6 w-2/3 mx-auto">
      <Card>
        <CardHeader>
          <p className="text-2xl font-semibold "> {title}</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>{content}</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default PostContent;
