import React, { useEffect, useState } from 'react'
import "./sidebar.css"
import axios from "axios"
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const [cats, setCats] = useState([]);
    useEffect(() => {
        const getCats = async () =>{
            const res = await axios.get("/categories")
            setCats(res.data)
        };
        getCats();
    }, []);
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <p>
                Lorem ipsum dolor sit amet
            </p>
        </div>

        <div className="sidebarItem">
            <span className='sidebarTitle'>CATEGORIES</span>
            <ul className="sidebarList">
                {cats.map((c) => (
                    <Link className='link' to={`/?cat=${c.name}`}>
                    <li className='sidebarListItem'>{c.name}</li>
                    </Link>
                    
                )
                )}            
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
