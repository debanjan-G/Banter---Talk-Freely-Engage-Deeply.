"use client";

import React from "react";
import { Card, CardHeader, CardFooter, Divider } from "@heroui/react";

interface PropsType {
  title: string;
  author: string;
  comments: string;
}

const PostCard = (props: PropsType) => {
  return (
    <Card className="w-full">
      <CardHeader className="flex gap-3">
        <p className="text-lg font-semibold">{props.title}</p>
      </CardHeader>
      <Divider />
      <Divider />
      <CardFooter className="flex gap-4 justify-between">
        <div>By {props.author}</div>
        <div>{props.comments} comments</div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
