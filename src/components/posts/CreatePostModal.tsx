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

import React from "react";

const CreatePostModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="my-4 w-full">
      <Button className="mx-auto w-full" onPress={onOpen} color="secondary">
        New Post
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
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
                />

                <Textarea
                  name="content"
                  className="w-full"
                  color="default"
                  label="Content"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button type="submit" color="primary">
                  Create
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreatePostModal;
