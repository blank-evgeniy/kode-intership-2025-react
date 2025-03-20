import React from "react";
import { Modal, ModalHeading, ModalProps } from "@/shared/ui/modal/Modal";
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group/RadioGroup";

import { sortVariants } from "../model/sortVariants";
import { useUsersSorting } from "../model/useUsersSorting";

export const UsersSortingModal = React.memo(
  ({ isOpen, onClose }: ModalProps) => {
    const { sortBy, handleChangeSort } = useUsersSorting();

    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalHeading style={{ marginBottom: "16px" }}>Сортировка</ModalHeading>
        <RadioGroup>
          {sortVariants.map((variant) => (
            <RadioGroupItem
              name="sortBy"
              checked={sortBy === variant.value}
              onChange={(e) => {
                e.stopPropagation();
                handleChangeSort(variant.value);
                onClose();
              }}
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
