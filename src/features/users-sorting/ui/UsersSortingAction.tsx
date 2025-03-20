import { useState } from "react";
import { Button } from "@/shared/ui/button/Button";
import { SortIcon } from "@/shared/icons/SortIcon";
import { UsersSortingModal } from "./UsersSortingModal";

export const UsersSortingAction = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="icon" onClick={() => setIsOpen(true)}>
        <SortIcon />
      </Button>
      <UsersSortingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
