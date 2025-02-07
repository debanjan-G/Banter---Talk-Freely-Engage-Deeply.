import { Button } from "@heroui/button";
import React from "react";
import * as actions from "@/actions";

const SigninBtn = () => {
  return (
    <form action={actions.signInAction}>
      <Button className="bg-green-600 text-white my-4" type="submit">
        Sign Up
      </Button>
    </form>
  );
};

export default SigninBtn;
