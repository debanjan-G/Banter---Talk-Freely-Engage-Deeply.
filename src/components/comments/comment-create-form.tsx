"use client";

// import { useFormState } from "react-dom";
import { useActionState } from "react";
import { useEffect, useRef, useState } from "react";
import { Textarea, Button, Alert, Spinner } from "@heroui/react";
// import FormButton from "@/components/common/form-button";
import * as actions from "@/actions";

interface CommentCreateFormProps {
  postId: string;
  parentId?: string;
  startOpen?: boolean;
}

export default function CommentCreateForm({
  postId,
  parentId,
  startOpen,
}: CommentCreateFormProps) {
  const [open, setOpen] = useState(startOpen);
  const ref = useRef<HTMLFormElement | null>(null);

  const [formState, action, isPending = true] = useActionState(
    actions.createCommentAction,
    { errors: {} }
  );

  useEffect(() => {
    if (formState.success) {
      ref.current?.reset();

      if (!startOpen) {
        setOpen(false);
      }
    }
  }, [formState, startOpen]);

  const form = (
    <form className="my-2" action={action} ref={ref}>
      <input type="hidden" name="postId" value={postId} />
      <input type="hidden" name="parentId" value={parentId} />
      <div className="space-y-2 px-1">
        <Textarea
          name="content"
          label="Reply"
          placeholder="Enter your comment"
          isInvalid={!!formState.errors.content}
          errorMessage={formState.errors.content?.join(", ")}
        />

        {formState.errors._form ? (
          <Alert color="danger">{formState.errors._form.join(", ")}</Alert>
        ) : null}
        <div className="flex justify-end">
          <Button color="secondary" type="submit">
            {isPending ? <Spinner color="default" /> : "Create Comment"}
          </Button>
        </div>
      </div>
    </form>
  );

  return (
    <div className="w-1/2 mx-auto">
      <div className="flex justify-center">
        <Button
          className="w-1/3 mx-auto hover:bg-blue-500 hover:text-white transition-all duration-300"
          color="primary"
          size="md"
          variant="bordered"
          onPress={() => setOpen(!open)}
        >
          Reply
        </Button>
      </div>
      {open && form}
    </div>
  );
}
