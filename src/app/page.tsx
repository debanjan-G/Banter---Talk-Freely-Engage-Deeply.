import SigninBtn from "@/components/SigninBtn";
import SignoutBtn from "@/components/SignoutBtn";
import paths from "@/utils/paths";
import { auth } from "@/auth";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-center">Welcome!</h1>
      <div className="flex justify-center gap-4">
        <SigninBtn />
        <SignoutBtn />
      </div>
      {session?.user ? (
        <div>
          <h1 className="my-4">User is signed in!</h1>
          <Link
            className="outline outline-slate-300 rounded p-2"
            href="/profile"
          >
            Go to profile
          </Link>
        </div>
      ) : (
        <h1>User is signed out!</h1>
      )}
      <div className="flex justify-center gap-4 p-4  ">
        <Link
          className="outline outline-slate-400 rounded p-2 hover:scale-105 transition-all duration-300"
          href={paths.viewTopic("javascript")}
        >
          View posts of a topic
        </Link>
        <Link
          className="outline outline-slate-400 rounded p-2 hover:scale-105 transition-all duration-300"
          href={paths.viewPost("javascript", 1)}
        >
          View A Post
        </Link>
        <Link
          className="outline outline-slate-400 rounded p-2 hover:scale-105 transition-all duration-300"
          href={paths.createPost("javascript")}
        >
          Create A Post
        </Link>
      </div>
    </div>
  );
}
