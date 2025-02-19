import { db } from "@/db";
import { Post } from "@prisma/client";

export type EnrichedPost = Post & {
  topic: { slug: string };
  _count: { comments: number };
  user: { name: string | null };
};

// we wont perform the data fetching here. Data fetching will be performed by the child component itself. SO we are not awaiting the DB queries.

export function fetchTopPosts(): Promise<PostsType[]> {}

export function fetchPostsByTopicName(topicName: string): Promise<PostsType[]> {
  return db.post.findMany({
    where: {
      topic: {
        slug: topicName, // Filter posts by the topic's slug
      },
    },
    include: {
      topic: {
        select: {
          slug: true, // Select the topic's slug
        },
      },
      _count: {
        select: {
          comments: true, // Include the count of comments
        },
      },
      user: {
        select: {
          name: true, // Include the user's name
        },
      },
    },
  }) as Promise<PostsType[]>; // Type assertion to match PostsType
}
