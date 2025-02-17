"use client";

import { Button } from "@heroui/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
  Textarea,
  Alert,
  Spinner,
} from "@heroui/react";

import * as actions from "@/actions";

import React, { useActionState } from "react";
import { useSession } from "next-auth/react";

interface createPostModalPropsType {
  topicId: string;
}

const CreatePostModal = ({ topicId }: createPostModalPropsType) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const session = useSession();
  const userId = session.data?.user?.id;

  const [formState, formAction, isPending] = useActionState(
    actions.createPostAction,
    {
      errors: {},
    }
  );

  return (
    <div className="my-4 w-full">
      <Button className="mx-auto w-full" onPress={onOpen} color="secondary">
        New Post
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <form action={formAction}>
          <input type="hidden" name="topicId" value={topicId || ""} />
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="text-2xl flex flex-col gap-1">
                  Create New Post
                </ModalHeader>
                <ModalBody>
                  <Input
                    name="title"
                    className="w-full"
                    color="default"
                    label="Title"
                    type="text"
                    isInvalid={!!formState.errors.title}
                    errorMessage={formState.errors.title?.join(", ")}
                  />

                  <Textarea
                    name="content"
                    className="w-full"
                    color="default"
                    label="Content"
                    isInvalid={!!formState.errors.content}
                    errorMessage={formState.errors.content?.join(", ")}
                  />

                  {formState.errors._form && (
                    <Alert
                      color="danger"
                      title={formState.errors._form.join(", ")}
                    />
                  )}
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button isDisabled={isPending} type="submit" color="primary">
                    {isPending ? (
                      <Spinner color="default" size="sm" />
                    ) : (
                      "Create"
                    )}
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </form>
      </Modal>
    </div>
  );
};

export default CreatePostModal;
