"use client";

import { Skeleton, Card, CardHeader, CardBody, Divider } from "@heroui/react";

export const PostShowLoading = () => {
  return (
    <div className="m-4 p-6 w-2/3 mx-auto">
      <Card>
        <CardHeader>
          <Skeleton className="rounded h-12 w-1/3" />
        </CardHeader>
        <Divider />
        <CardBody>
          <Skeleton className="rounded h-12 w-full my-2" />
          <Skeleton className="rounded h-12 w-full my-2" />
          <Skeleton className="rounded h-12 w-full my-2" />
        </CardBody>
      </Card>
    </div>
  );
};
