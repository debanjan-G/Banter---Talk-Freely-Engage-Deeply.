"use client";

import React from "react";

import paths from "@/utils/paths";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import Link from "next/link";

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
