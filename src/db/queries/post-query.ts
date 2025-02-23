import { db } from "@/db";
import { Post } from "@prisma/client";

export type EnrichedPost = Post & {
  topic: { slug: string };
  _count: { comments: number };
  user: { name: string | null };
};

// we wont perform the data fetching here. Data fetching will be performed by the child component itself. SO we are not awaiting the DB queries.

export function fetchTopPosts(): Promise<EnrichedPost[]> {
  return db.post.findMany({
    include: {
      topic: {
        select: { slug: true },
      },
      user: {
        select: {
          name: true,
        },
      },
      _count: {
        select: {
          comments: true,
        },
      },
    },
    orderBy: {
      comments: {
        _count: "desc",
      },
    },
    take: 3,
  }) as Promise<EnrichedPost[]>;
}

export function fetchPostsByTopicName(
  topicName: string
): Promise<EnrichedPost[]> {
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
  }) as Promise<EnrichedPost[]>; // Type assertion to match PostsType
}

export function getPostsBySearch(term: string): Promise<EnrichedPost[]> {
  return db.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: term,
          },
        },
        {
          content: {
            contains: term,
          },
        },
      ],
    },
    include: {
      topic: {
        select: {
          slug: true,
        },
      },
      user: {
        select: {
          name: true,
        },
      },
      _count: {
        select: {
          comments: true,
        },
      },
    },
  }) as Promise<EnrichedPost[]>;
}
