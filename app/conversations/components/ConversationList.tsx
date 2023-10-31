"use client";

import React, { useState } from "react";

import { FullConversationType } from "@/app/types";
import { useRouter } from "next/navigation";
import useConversation from "@/app/hooks/useConversation";
import clsx from "clsx";
import { MdOutlineGroupAdd } from "react-icons/md";
import ConversationBox from "./ConversationBox";
import { GroupChatModal } from "@/app/components";
import { User } from "@prisma/client";

interface ConversationListProps {
  initialItems: FullConversationType[];
  users: User[];
}

const ConversationList: React.FC<ConversationListProps> = ({
  initialItems,
  users,
}) => {
  const router = useRouter();

  const [items, setItems] = useState<FullConversationType[]>(initialItems);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { conversationId, isOpen } = useConversation();

  return (
    <>
      <GroupChatModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        users={users}
      />
      <aside
        className={clsx(
          `
        fixed
        inset-y-0
        pb-20
        lg:pb-0
        lg:left-20
        lg:w-80
        lg:block
        overflow-y-auto
        border-r
        border-gray-200
    `,
          isOpen ? "hidden" : "block w-full left-0"
        )}
      >
        <div className="px-5">
          <div className="flex justify-between mb-4 pt-4">
            <div className="text-2xl font-bold text-neutral-800">Messages</div>
            <div
              onClick={() => setIsModalOpen(true)}
              className="rounded-full p-2 bg-gray-100 cursor-pointer hover:opacity-75 transition"
            >
              <MdOutlineGroupAdd size={12} />
            </div>
          </div>
          {items &&
            items.map((item) => (
              <ConversationBox
                key={item.id}
                data={item}
                selected={conversationId === item.id}
              />
            ))}
        </div>
      </aside>
    </>
  );
};

export default ConversationList;
