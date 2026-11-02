import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  Home,
  Compass,
  PlusSquare,
  Bell,
  User,
  Info,
  Sparkles
} from "lucide-react";
import { useApp } from "../context/useApp";

export default function Sidebar({ mobileOpen, setMobileOpen }) {
  const { unreadCount, userProfile } = useApp();
  const navigate = useNavigate();

  const handleLinkClick = () => {
    if (mobileOpen) setMobileOpen(false);
  };

  return (
    <aside className={`left-sidebar ${mobileOpen ? "mobile-open" : ""}`}>
      <div className="sidebar-nav-card">
        <NavLink
          to="/"
          className={({ isActive }) => `nav-link-item ${isActive ? "active" : ""}`}
          onClick={handleLinkClick}
          end
        >
          <Home className="nav-icon" />
          <span>Home Feed</span>
        </NavLink>

        <NavLink
          to="/explore"
          className={({ isActive }) => `nav-link-item ${isActive ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          <Compass className="nav-icon" />
          <span>Explore SDG 9</span>
        </NavLink>

        <NavLink
          to="/create"
          className={({ isActive }) => `nav-link-item ${isActive ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          <PlusSquare className="nav-icon" />
          <span>Create Post</span>
        </NavLink>

        <NavLink
          to="/notifications"
          className={({ isActive }) => `nav-link-item ${isActive ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          <Bell className="nav-icon" />
          <span>Notifications</span>
          {unreadCount > 0 && (
            <span className="nav-badge-count">{unreadCount}</span>
          )}
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) => `nav-link-item ${isActive ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          <User className="nav-icon" />
          <span>My Profile</span>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => `nav-link-item ${isActive ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          <Info className="nav-icon" />
          <span>About SDG 9</span>
        </NavLink>

        <button
          className="btn-primary sidebar-create-btn"
          onClick={() => {
            navigate("/create");
            handleLinkClick();
          }}
        >
          <Sparkles size={18} />
          <span>Share Innovation</span>
        </button>
      </div>

      {/* Mini Profile Card */}
      <Link
        to="/profile"
        className="sidebar-user-card"
        onClick={handleLinkClick}
        title="View profile"
      >
        <img
          src={userProfile.avatar}
          alt={userProfile.name}
          className="sidebar-user-avatar"
        />
        <div className="sidebar-user-meta">
          <div className="sidebar-user-name">{userProfile.name}</div>
          <div className="sidebar-user-role">@{userProfile.handle}</div>
        </div>
      </Link>
    </aside>
  );
}
