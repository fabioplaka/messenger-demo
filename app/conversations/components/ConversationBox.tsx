"use client";

import React from "react";
import { FullConversationType } from "@/app/types";

interface ConversationBoxProps {
  selected: boolean;
  data: FullConversationType;
}

const ConversationBox: React.FC<ConversationBoxProps> = ({
  selected,
  data,
}) => {
  return <div>ConversationBox</div>;
};

export default ConversationBox;
