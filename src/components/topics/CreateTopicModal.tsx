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

import React from "react";
import * as actions from "@/actions";

const CreateTopicModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="my-4">
      <Button onPress={onOpen} color="secondary">
        New Topic
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <form action={actions.createTopicAction}>
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
                  />
                  <Textarea
                    name="description"
                    className="w-full"
                    color="primary"
                    defaultValue=""
                    label="Description"
                    type="text"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button type="submit" color="primary" onPress={onClose}>
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
