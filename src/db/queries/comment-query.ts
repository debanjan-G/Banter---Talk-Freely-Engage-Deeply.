import { Comment } from "@prisma/client";
import { db } from "..";

export type enrichedComment = Comment & {
  user: { name: string | null; image: string | null };
};

export const getCommentsByPostId = (
  postId: string
): Promise<enrichedComment[]> => {
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
};
