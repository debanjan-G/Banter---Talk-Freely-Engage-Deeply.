import CommentShow from "@/components/comments/comment-show";
import { enrichedComment } from "@/db/queries/comment-query";

interface CommentListProps {
  fetchComments: () => Promise<enrichedComment[]>;
}

// TODO: Get a list of comments from somewhere
export default async function CommentList({ fetchComments }: CommentListProps) {
  // fetching all comments of current post
  const comments = await fetchComments();

  const topLevelComments = comments.filter(
    (comment) => comment.parentId === null
  );
  const renderedComments = topLevelComments.map((comment) => {
    return (
      <CommentShow
        key={comment.id}
        commentId={comment.id}
        comments={comments}
      />
    );
  });

  return (
    <div className="space-y-3">
      <h1 className="text-lg font-bold">All {comments.length} comments</h1>
      {renderedComments}
    </div>
  );
}
