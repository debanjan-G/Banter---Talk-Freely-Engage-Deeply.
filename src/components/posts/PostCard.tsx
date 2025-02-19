"use client";

import React from "react";
import { Card, CardHeader, CardFooter, Divider } from "@heroui/react";

interface PropsType {
  title: string;
  author: string | null;
  comments: number;
}

const PostCard = (props: PropsType) => {
  return (
    <Card className="w-full hover:bg-slate-100 transition-all duration-400">
      <CardHeader>
        <p className="text-lg font-semibold">{props.title}</p>
      </CardHeader>
      {/* <Divider /> */}
      <CardFooter className="flex gap-4 justify-between">
        <div className="text-slate-600 text-sm">
          By {props.author === null ? "Unknown" : props.author}
        </div>
        <div className="text-slate-600 text-sm">{props.comments} comments</div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
