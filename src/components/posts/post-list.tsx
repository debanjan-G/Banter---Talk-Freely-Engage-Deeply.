import Link from "next/link";
import paths from "@/utils/paths";
import { EnrichedPost } from "@/db/queries/post-query";
import PostCard from "./PostCard";

interface PostListProps {
  fetchPost: () => Promise<EnrichedPost[]>;
}

// TODO: Get list of posts into this component somehow
export default async function PostList({ fetchPost }: PostListProps) {
  const posts = await fetchPost();

  const renderedPosts = posts.map((post) => {
    const topicSlug = post.topic.slug;

    if (!topicSlug) {
      throw new Error("Need a slug to link to a post");
    }

    return (
      <div key={post.id}>
        <Link href={paths.viewPost(topicSlug, post.id)}>
          <PostCard
            comments={post._count.comments}
            title={post.title}
            author={post.user.name}
          />
        </Link>
      </div>
    );
  });

  return (
    <div className="space-y-2">
      {renderedPosts.length === 0 ? (
        <h1 className="text-2xl font-light">No posts to show</h1>
      ) : (
        renderedPosts
      )}
    </div>
  );
}
