import React from "react";
import { Sidebar } from "../components/UISidebar";
import { getUsers } from "../actions/getUsers";
import UserList from "./components/UserList";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = async ({ children }) => {
  const users = await getUsers();

  return (
    <Sidebar>
      <div className="h-full">
        <UserList items={users} />
        {children}
      </div>
    </Sidebar>
  );
};

export default Layout;
