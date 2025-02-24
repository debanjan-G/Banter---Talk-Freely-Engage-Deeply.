import PostList from "@/components/posts/post-list";
import PostsContainer from "@/components/posts/PostsContainer";

import CreateTopicModal from "@/components/topics/CreateTopicModal";

import TopicList from "@/components/topics/TopicList";
import { fetchTopPosts } from "@/db/queries/post-query";

export default async function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Top Posts</h1>
      <div className="flex justify-evenly gap-10">
        <PostsContainer>
          <PostList fetchPost={fetchTopPosts} />
        </PostsContainer>
        <div className="w-1/4 flex-col justify-center items-center gap-4">
          <CreateTopicModal />

          <TopicList />
        </div>
      </div>
      <h1 className="mt-10 text-4xl font-extralight text-center">
        Connect over what moves you.
      </h1>
    </div>
  );
}
