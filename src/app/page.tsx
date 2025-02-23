import PostList from "@/components/posts/post-list";
import PostsContainer from "@/components/posts/PostsContainer";

import CreateTopicModal from "@/components/topics/CreateTopicModal";

import TopicList from "@/components/topics/TopicList";
import { fetchTopPosts } from "@/db/queries/post-query";

export default async function Home() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-extralight text-center mb-4">
        Connect Over What Moves You.
      </h1>
      <div className="flex justify-evenly gap-10">
        <PostsContainer>
          <PostList fetchPost={fetchTopPosts} />
        </PostsContainer>
        <div className="w-1/4 flex-col justify-center items-center gap-4">
          <CreateTopicModal />

          <TopicList />
        </div>
      </div>
    </div>
  );
}
