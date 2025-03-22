import { useLockScroll } from "@/shared/hooks/useLockScroll";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import {
  CrossButton,
  ModalContent,
  ModalOverlay,
  ModalWrapper,
  StyledModalHeading,
} from "./Modal.styles";
import { CloseIcon } from "@/shared/icons/CloseIcon";

export interface ModalProps {
  isOpen: boolean;
  children?: React.ReactNode;
  onClose: () => void;
}

export const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  const { lockScroll, unlockScroll } = useLockScroll();

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          onClose?.();
        }
      });
    }
  }, [isOpen, onClose]);

  const handleCLickOutside = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose?.();
    }
  };

  useEffect(() => {
    if (isOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }

    return () => {
      unlockScroll();
    };
  }, [isOpen, lockScroll, unlockScroll]);

  return createPortal(
    <ModalWrapper $isOpen={isOpen}>
      <ModalOverlay onClick={handleCLickOutside} />
      <ModalContent>
        <CrossButton onClick={onClose}>
          <CloseIcon style={{ zIndex: 40 }} />
        </CrossButton>
        {children}
      </ModalContent>
    </ModalWrapper>,
    document?.body
  );
};

export interface ModalHeadingProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const ModalHeading = ({ children, ...props }: ModalHeadingProps) => {
  return <StyledModalHeading {...props}>{children}</StyledModalHeading>;
};
