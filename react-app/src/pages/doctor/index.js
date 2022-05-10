import React from 'react';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebarDoctor';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from './dashboard';


function Home() {
    return (
            <>
  <div className="main-wrapper">
    <Navbar />
    <Sidebar />
    <div class="page-wrapper">
      <Outlet />
    </div>

  </div>
  <div className="sidebar-overlay" data-reff />
</>

    );
}

export default Home;
