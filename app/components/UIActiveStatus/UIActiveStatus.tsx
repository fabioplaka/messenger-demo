"use client";

import { useActiveChannel } from "@/app/hooks/useActiveChannel";

const UIActiveStatus = ({}) => {
  useActiveChannel();
  return null;
};

export default UIActiveStatus;
