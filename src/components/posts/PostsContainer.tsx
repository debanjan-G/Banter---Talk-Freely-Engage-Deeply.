import React from "react";

interface propsType {
  children: React.ReactNode;
}

const PostsContainer = ({ children }: propsType) => {
  return (
    <div className="w-full flex flex-col gap-4 outline outline-slate-300 rounded p-6 ">
      {children}
    </div>
  );
};

export default PostsContainer;
