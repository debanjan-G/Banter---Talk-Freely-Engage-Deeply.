import React from "react";
import { Button } from "@heroui/button";
import * as actions from "@/actions";

const SignoutBtn = () => {
  return (
    <form action={actions.signOutAction}>
      <Button className="bg-red-600 text-white my-4" type="submit">
        Sign Out
      </Button>
    </form>
  );
};

export default SignoutBtn;
