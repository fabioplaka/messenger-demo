"use client";

import React from "react";
import clsx from "clsx";
import useConversation from "../hooks/useConversation";
import { UIEmptyState } from "../components";

interface HomeProps {}

const Home: React.FC = () => {
  const { isOpen } = useConversation();

  return (
    <div
      className={clsx("lg:pl-80 h-full lg:block", isOpen ? "block" : "hidden")}
    >
      <UIEmptyState />
    </div>
  );
};

export default Home;
