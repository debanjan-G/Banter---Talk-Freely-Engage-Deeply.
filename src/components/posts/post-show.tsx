"use client";

import { Card, CardBody, CardHeader, Divider } from "@heroui/react";

interface PostShowProps {
  title: string;
  content: string;
}

export default function PostShow({ title, content }: PostShowProps) {
  return (
    <div className="m-4 p-6 w-1/2 mx-auto">
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
}
