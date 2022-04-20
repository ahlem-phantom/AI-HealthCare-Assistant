import React from 'react';
import { useEffect, useState } from 'react';
import sidebarConfig from '../pages/doctor/config';
import { Link } from 'react-router-dom';

function Sidebar() {

    return (
        <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
            <li className="menu-title">Main</li>

              {
                    sidebarConfig.map(item=> (
                        <li>
               <Link
                variant="subtitle2"
                component={Link}
                to={item.path}
                underline="hover"
              >
               <i className={item.icon} /> <span>{item.title}</span> 
                </Link> 
                        </li>

                    ))
                }
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Sidebar;