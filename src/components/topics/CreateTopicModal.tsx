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
} from "@heroui/react";

import { useActionState, useState } from "react";

import React from "react";
import * as actions from "@/actions";

const CreateTopicModal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [formState, formAction] = useActionState(actions.createTopicAction, {
    errors: {},
  });

  return (
    <div className="my-4">
      <Button onPress={onOpen} color="secondary">
        New Topic
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <form action={formAction}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="text-2xl flex flex-col gap-1">
                  Create A Topic
                </ModalHeader>
                <ModalBody>
                  <Input
                    name="title"
                    className="w-full"
                    color="primary"
                    label="Title"
                    type="text"
                    errorMessage={formState.errors?.title?.join(", ")}
                    isInvalid={!!formState.errors?.title}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />

                  <Textarea
                    name="description"
                    className="w-full"
                    color="primary"
                    label="Description"
                    errorMessage={formState.errors?.description?.join(", ")}
                    isInvalid={!!formState.errors?.description}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button type="submit" color="primary">
                    Submit
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

export default CreateTopicModal;
