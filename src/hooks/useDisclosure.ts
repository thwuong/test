import { useState } from "react";

export function useDisclosure() {
  const [open, setOpen] = useState(false);
  const isOpen = open == true;
  const isClosed = open == false;
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return {
    isClosed,
    isOpen,
    onClose,
    onOpen,
    open,
  };
}
