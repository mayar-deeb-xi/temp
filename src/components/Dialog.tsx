import { X } from "lucide-react";
import React, { ReactNode, useRef } from "react";

interface DialogProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

function Dialog({ children, isOpen, onClose }: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  React.useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      onCancel={onClose}
      className="border  rounded-md px-2 pb-3 "
    >
      <div className=" w-full  flex justify-end items-end mb-2 mt-1">
        <div
          onClick={() => onClose()}
          className=" hover:opacity-35 cursor-pointer "
        >
          <X size={18} />
        </div>
      </div>
      {children}
    </dialog>
  );
}

export default Dialog;
