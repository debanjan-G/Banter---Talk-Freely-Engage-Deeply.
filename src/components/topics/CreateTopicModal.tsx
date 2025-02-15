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
} from "@heroui/react";

import { useActionState } from "react";

import React from "react";
import * as actions from "@/actions";

const CreateTopicModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [formState, formAction] = useActionState(actions.createTopicAction, {
    errors: {},
  });

  return (
    <div className="my-4 w-full">
      <Button className="mx-auto w-full" onPress={onOpen} color="secondary">
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
                    color="default"
                    label="Title"
                    type="text"
                    isInvalid={!!formState.errors.title}
                    errorMessage={formState.errors.title?.join(", ")}
                  />

                  <Textarea
                    name="description"
                    className="w-full"
                    color="default"
                    label="Description"
                    isInvalid={!!formState.errors.description}
                    errorMessage={formState.errors.description?.join(", ")}
                  />
                  {formState.errors._form && (
                    <Alert
                      color="danger"
                      title={formState.errors._form?.join(", ")}
                    />
                  )}
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  {/* <Button type="submit" color="primary">
                    Submit
                  </Button> */}
                  <button
                    type="submit"
                    className="bg-blue-600 text-white text-sm p-2 rounded"
                  >
                    Submit
                  </button>
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
