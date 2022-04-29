import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className='sidebar'>Sidebar
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <p>
                Lorem ipsum dolor sit amet
            </p>
        </div>

        <div className="sidebarItem">
            <span className='sidebarTitle'>CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>               
            </ul>
        </div>
        <div className="sidebarItem">
            <span className='sidebarTitle'>FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook"></i>
            <i className="sidebarIcon fa-brands fa-twitter"></i>
            <i className="sidebarIcon fa-brands fa-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-instagram"></i>

            </div>
        </div>
    </div>
  )
}
