import PostsContainer from "@/components/posts/PostsContainer";
import PostCard from "@/components/posts/PostsContainer";
import CreateTopicModal from "@/components/topics/CreateTopicModal";

import TopicList from "@/components/topics/TopicList";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Welcome to Banter</h1>
      <div className="flex justify-evenly gap-10">
        <PostsContainer>
          <h1 className="text-center text-xl font-bold">Popular Posts</h1>
          <p className="w-full border border-slate-300 rounded p-4 my-2">
            Post 1
          </p>
          <p className="w-full border border-slate-300 rounded p-4 my-2">
            Post 4
          </p>
          <p className="w-full border border-slate-300 rounded p-4 my-2">
            Post 3
          </p>
        </PostsContainer>
        <div className="w-1/4 flex-col justify-center items-center gap-4">
          <CreateTopicModal />

          <TopicList />
        </div>
      </div>
    </div>
  );
}
