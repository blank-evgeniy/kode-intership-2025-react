import { Modal, ModalHeading, ModalProps } from "@/shared/ui/modal/Modal";
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group/RadioGroup";
import React from "react";

import { sortVariants } from "../model/sortVariants";

export const UsersSortingModal = React.memo(
  ({ isOpen, onClose }: ModalProps) => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalHeading style={{ marginBottom: "16px" }}>Сортировка</ModalHeading>
        <RadioGroup>
          {sortVariants.map((variant) => (
            <RadioGroupItem
              name="sortBy"
              key={variant.value}
              id={variant.value}
              label={variant.label}
            />
          ))}
        </RadioGroup>
      </Modal>
    );
  }
);
