import React from "react";
import { Modal, ModalHeading, ModalProps } from "@/shared/ui/modal/Modal";
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group/RadioGroup";

import { sortVariants } from "../model/sortVariants";
import { useUsersSorting } from "../model/useUsersSorting";
import { useTranslation } from "react-i18next";

export const UsersSortingModal = React.memo(
  ({ isOpen, onClose }: ModalProps) => {
    const { sortBy, handleChangeSort } = useUsersSorting();
    const { t } = useTranslation("common");

    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalHeading style={{ marginBottom: "16px" }}>
          {t("sorting")}
        </ModalHeading>
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
              label={t(variant.label)}
            />
          ))}
        </RadioGroup>
      </Modal>
    );
  }
);
