import React from "react";
import { DesktopSidebar, MobileFooter } from "..";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = async ({ children }) => {
  return (
    <div className="h-full">
      <DesktopSidebar />
      <MobileFooter />
      <main className="lg:pl-20 h:full">{children}</main>
    </div>
  );
};

export default Sidebar;
