import React from 'react';
export default function Topnav() {
  return (
        <div className="topbar-container">
          <div className="welcome-portion">
            <p>welcome to Our store Multikart</p>
            <i className="fa-solid fa-phone-flip"></i>
            <p>Call Us: 123-456-7890</p>
          </div>
          <div className='account-portion'>
           <i  className="fa-solid fa-heart"></i>
           <i  className="fa-solid fa-user"></i>
          <p>My Account</p>
          </div>
             
          
        </div>
  )
}