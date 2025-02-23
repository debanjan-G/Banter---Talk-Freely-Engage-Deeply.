"use client";

import React from "react";
import { Card, CardBody } from "@heroui/react";

interface PropsType {
  title: string;
  author: string | null;
  comments: number;
}

const PostCard = (props: PropsType) => {
  return (
    <Card className="w-full hover:bg-slate-100 transition-all duration-400">
      <CardBody className="flex justify-between p-4">
        <p className="text-lg font-semibold">{props.title}</p>
        <div className="flex justify-between">
          <div className="text-slate-600 text-sm">
            By {props.author === null ? "Unknown" : props.author}
          </div>
          <div className="text-slate-600 text-sm">
            {props.comments} comments
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default PostCard;
