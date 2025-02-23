"use client";

import React from "react";
import { Input } from "@heroui/react";
import { SearchIcon } from "../Header";
import { useSearchParams } from "next/navigation";
import * as actions from "@/actions";

const SearchInput = () => {
  const searchParams = useSearchParams();

  const term = searchParams.get("term");

  return (
    <>
      <form action={actions.searchPostAction}>
        <Input
          classNames={{
            base: " max-w-full sm:max-w-[15rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
          defaultValue={term || ""}
          name="term"
        />
      </form>
    </>
  );
};

export default SearchInput;
