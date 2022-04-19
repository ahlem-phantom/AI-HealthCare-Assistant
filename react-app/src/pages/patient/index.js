import React from 'react';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import { Outlet } from 'react-router-dom';


function Home() {
    return (
            <>
  <div className="main-wrapper">
    <Navbar />
    <Sidebar />
    <Outlet />

  </div>
  <div className="sidebar-overlay" data-reff />
</>

    );
}

export default Home;