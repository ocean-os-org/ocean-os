import { useState, createContext, PropsWithChildren } from 'react';

type SidebarContext = {
  sidebarOpen: boolean;
  sidebarMobileOpen: boolean;
  toggleSidebar: () => void;
  closeMobileSidebar: () => void;
  openMobileSidebar: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SidebarContext = createContext<SidebarContext>(
  {} as SidebarContext
);

export const SidebarProvider = ({ children } : PropsWithChildren<{}>) => {
  const [sidebarOpen, setSidebarToggle] = useState<boolean>(true);
  const [sidebarMobileOpen, setSidebarMobile] = useState<boolean>(false);
  
  const toggleSidebar = () => {
    setSidebarToggle(!sidebarOpen);
  };

  const openMobileSidebar = () => {
    setSidebarMobile(true);
  };
  
  const closeMobileSidebar = () => {
    setSidebarMobile(false);
  };

  return (
    <SidebarContext.Provider
      value={{ sidebarOpen, sidebarMobileOpen, toggleSidebar, closeMobileSidebar, openMobileSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
