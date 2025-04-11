"use client"

import { useState, useEffect } from "react"
import { FaHome, FaInbox, FaUser, FaSignOutAlt, FaUserEdit, FaBars } from "react-icons/fa"
import "./../assets/Navbar.css"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest(".nav-links") && !target.closest(".hamburger")) {
        setMenuOpen(false)
      }
      if (!target.closest(".profile-dropdown")) {
        setProfileOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="Gift Hub" className="logo" />
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>

      {menuOpen && <div className="sidebar-overlay"></div>}

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="#">
            <FaHome /> Home
          </a>
        </li>
        <li>
          <a href="#">
            <FaInbox /> Inbox
          </a>
        </li>
        <li className={`profile-dropdown ${profileOpen ? "open" : ""}`}>
          <a
            href="#"
            className="profile-main-button"
            onClick={(e) => {
              e.preventDefault()
              setProfileOpen(!profileOpen)
            }}
          >
            <FaUser /> Profile
          </a>
          <div className="dropdown-content">
            <a href="#">
              <FaUserEdit /> Edit Profile
            </a>
            <a href="#">
              <FaSignOutAlt /> Logout
            </a>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
