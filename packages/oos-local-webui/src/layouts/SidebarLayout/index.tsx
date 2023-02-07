import { SidebarProvider } from '../../services/SidebarContext';

import Sidebar from './Sidebar';
import Header from './Header';
import PageContent from './PageContent';

const SidebarLayout = () => {

  return (
    <SidebarProvider>
      <Header />
      <Sidebar />
      <PageContent />
    </SidebarProvider>
  );
}; 

export default SidebarLayout;
