import CommentShow from "@/components/comments/comment-show";
import { db } from "@/db";
import {
  enrichedComment,
  getCommentsByPostId,
} from "@/db/queries/comment-query";

interface CommentListProps {
  postId: string;
}

// TODO: Get a list of comments from somewhere
export default async function CommentList({ postId }: CommentListProps) {
  // fetching comments of post with id 'postId'
  const comments = await getCommentsByPostId(postId);

  const topLevelComments = comments.filter(
    (comment) => comment.parentId === null
  );
  const renderedComments = topLevelComments.map((comment) => {
    return (
      <CommentShow commentId={comment.id} key={comment.id} postID={postId} />
    );
  });

  return (
    <div className="space-y-3">
      <h1 className="text-lg font-bold">All {comments.length} comments</h1>
      {renderedComments}
    </div>
  );
}
