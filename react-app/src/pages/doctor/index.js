import React, { useState } from 'react';
import Sidebar from '../../components/layout/DoctorSidebar';
import DashboardHeader from '../../components/layout/DashboardHeader';
import { Outlet } from 'react-router-dom';

function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="dashboard-container relative flex h-screen overflow-hidden bg-slate-50">
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            <div className={`flex flex-col flex-1 h-full overflow-hidden transition-all duration-300 ${isSidebarOpen ? 'md:ml-0' : ''}`}>
                <DashboardHeader onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
                <main className="flex-1 overflow-y-auto dashboard-content px-6 md:px-12 lg:px-16 pt-8 pb-12 text-left" dir="ltr">
                    <div className="w-full">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Home;
