"use client";

import React from "react";
import { UIModal } from ".";
import Image from "next/image";

interface ImageModalProps {
  src?: string | null;
  isOpen?: boolean;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ onClose, src, isOpen }) => {
  if (!src) return null;

  return (
    <UIModal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 h-80">
        <Image alt="image" className="object-cover" fill src={src} />
      </div>
    </UIModal>
  );
};

export default ImageModal;
