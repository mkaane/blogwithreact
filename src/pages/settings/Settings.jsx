import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import "./settings.css"

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className='settingsUpdateTitle'>Update your account</span>
            <span className='settingsDeleteTitle'>Delete account</span>
          </div>
          <form className='settingsForm'>
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
              alt="" 
              />
              <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-user-gear"></i>
              </label>
              <input type="file" id='fileInput' style={{display:"none"}}/>
            </div>
            <label>Username</label>
            <input type="text" placeholder='kaan'/>
            <label>Email</label>
            <input type="email" placeholder='kaan@gmail.com'/>
            <label>Password</label>
            <input type="password"/>
            <button className="settingsSubmit">Update</button>
          </form>
        </div>
        <Sidebar/>
        </div>
  )
}
