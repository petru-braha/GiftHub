import React, { useState } from 'react';
import { FaHome, FaInbox, FaUser, FaSignOutAlt, FaUserEdit, FaBars } from 'react-icons/fa';
import './../assets/Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
      <img src="/logo.png" alt="logo" className="logo" />
      </div>


      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="https://www.figma.com/design/lAgOFeOdTyVsNZHvnKwwBb/GiftHub-Components?node-id=1-3&p=f&t=KKNOwv7WYizO46nx-0"><FaHome /> Home</a></li>
        <li><a href="https://www.figma.com/design/lAgOFeOdTyVsNZHvnKwwBb/GiftHub-Components?node-id=1-3&p=f&t=KKNOwv7WYizO46nx-0"><FaInbox /> Inbox</a></li>
        <li><a href="https://www.figma.com/design/lAgOFeOdTyVsNZHvnKwwBb/GiftHub-Components?node-id=1-3&p=f&t=KKNOwv7WYizO46nx-0"><FaUser /> Profile</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;