"use client";
import React from "react";
import { Chip } from "@heroui/react";

interface propsType {
  children: React.ReactNode;
}

const ChipComponent = ({ children }: propsType) => {
  return (
    <Chip variant="flat" color="primary">
      {children}
    </Chip>
  );
};

export default ChipComponent;
