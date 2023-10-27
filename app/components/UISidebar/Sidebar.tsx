import React from "react";
import { DesktopSidebar, MobileFooter } from "..";
import { getCurrentUser } from "@/app/actions/getCurrentUser";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = async ({ children }) => {
  const currentUser = await getCurrentUser();

  return (
    <div className="h-full">
      <DesktopSidebar currentUser={currentUser} />
      <MobileFooter />
      <main className="lg:pl-20 h:full">{children}</main>
    </div>
  );
};

export default Sidebar;
