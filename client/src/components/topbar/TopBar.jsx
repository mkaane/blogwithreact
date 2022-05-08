import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import "./topbar.css"


export default function TopBar() {
  const {user, dispatch} = useContext(Context);

  const handleLogout = () =>{
    dispatch({type:"LOGOUT"});
  }
  return (
    <div className="top">
        <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                  <Link className='link' to="/" >Home</Link>
                </li>
                <li className="topListItem">
                <Link className='link' to="/about" >About</Link>
                </li>
                <li className="topListItem">
                <Link className='link' to="/contact" >Contact</Link>
                </li>
                <li className="topListItem">
                  <Link className='link' to="/Write">Write</Link>
                </li>
                <li className="topListItem" onClick={handleLogout}>{user && "Logout"}</li>
            </ul>
        </div>
        <div className="topRight">
          {
            user ? (
              <img className='profilePic' 
              src={user.profilePic}
              alt="" />

            ) : (
              <ul className='topList'>
                <li className='topListItem'>
                  <Link className='link' to="/login">
                    Login
                  </Link>
                </li>
                <li className='topListItem'>
                  <Link className='link' to="/register">
                    Register
                  </Link>
                </li>
              </ul>
            )
          }
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        
        </div>
    </div>
  )
}
