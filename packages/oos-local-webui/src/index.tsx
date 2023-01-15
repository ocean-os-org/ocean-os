import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import './index.css';
//import '@fontsource/roboto/300.css';
//import '@fontsource/roboto/400.css';
//import '@fontsource/roboto/500.css';
//import '@fontsource/roboto/700.css';

import { SidebarProvider } from './contexts/SidebarContext';
import App from './App';

createRoot(document.getElementById('root')!)
.render(
  <HelmetProvider>
    <SidebarProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SidebarProvider>
  </HelmetProvider>  
)
