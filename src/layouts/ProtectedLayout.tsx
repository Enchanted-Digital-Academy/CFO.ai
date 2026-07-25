import { Outlet } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";

const ProtectedLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} />

      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} />

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default ProtectedLayout;