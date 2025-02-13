import CreateTopicModal from "@/components/topics/CreateTopicModal";
import TopicList from "@/components/topics/TopicList";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Welcome to Banter</h1>
      <div className="flex justify-evenly gap-10">
        <div className=" outline outline-slate-300 rounded p-4 w-1/2">
          <h1 className="text-center text-xl font-bold">Popular Posts</h1>
          <p className="border border-slate-300 rounded p-4 my-2">Post 1</p>
          <p className="border border-slate-300 rounded p-4 my-2">Post 4</p>
          <p className="border border-slate-300 rounded p-4 my-2">Post 3</p>
        </div>
        <div className="flex-col justify-center items-center gap-4">
          <CreateTopicModal />
          <TopicList />
        </div>
      </div>
    </div>
  );
}
