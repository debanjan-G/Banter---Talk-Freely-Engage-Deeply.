import { Button } from "@heroui/button";
import React from "react";
import * as actions from "@/actions";

const SignupBtn = () => {
  return (
    <form action={actions.signInAction}>
      <Button className="bg-blue-500 text-white my-4" type="submit">
        Sign Up
      </Button>
    </form>
  );
};

export default SignupBtn;
