import { Comment } from "@prisma/client";
import { db } from "..";
import { cache } from "react";

export type enrichedComment = Comment & {
  user: { name: string | null; image: string | null };
};

export const getCommentsByPostId = cache(
  (postId: string): Promise<enrichedComment[]> => {
    // console.log("fetching comments");

    const comments = db.comment.findMany({
      where: {
        postId,
      },
      include: {
        user: {
          select: { name: true, image: true },
        },
      },
    });
    return comments as Promise<enrichedComment[]>;
  }
);
