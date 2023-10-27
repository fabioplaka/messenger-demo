import React from "react";
import { UIEmptyState } from "@/app/components/";

type UsersProps = {};

const Users = () => {
  return (
    <div className="hidden lg:block lg:pl-80 h-full">
      <UIEmptyState />
    </div>
  );
};

export default Users;
