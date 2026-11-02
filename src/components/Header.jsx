import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Search,
  Bell,
  Menu,
  X,
  Layers,
  Award
} from "lucide-react";
import { useApp } from "../context/useApp";

export default function Header({ mobileOpen, setMobileOpen }) {
  const { searchQuery, setSearchQuery, unreadCount, userProfile } = useApp();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (val.trim() && location.pathname !== "/explore") {
      navigate("/explore");
    }
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <header className="top-header">
      <div className="header-container">
        {/* Left: Hamburger & Brand */}
        <div className="header-left">
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <Link to="/" className="brand-logo">
            <div className="brand-icon-box">
              <Layers size={22} />
            </div>
            <div className="brand-text">
              Connect<span>Hub</span>
            </div>
          </Link>
        </div>

        {/* Center: Global Search Bar */}
        <div className="header-search">
          <div className="search-input-box">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search innovations, #SDG9 topics, research..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            {searchQuery && (
              <button
                className="clear-search-btn"
                onClick={handleClearSearch}
                aria-label="Clear Search"
              >
                <X size={15} />
              </button>
            )}
          </div>
        </div>

        {/* Right: Academic Pill, Notifications, User Profile */}
        <div className="header-right">
          <div className="assignment-badge-pill" title="Design Process and Perspective Assignment 2">
            <Award size={14} />
            <span>Roll <span className="roll-tag">No. 4</span></span>
            <span>• SDG 9</span>
          </div>

          <Link
            to="/notifications"
            className="header-action-btn"
            title="Notifications"
            aria-label="Notifications"
          >
            <Bell size={20} />
            {unreadCount > 0 && <span className="notif-badge-dot" />}
          </Link>

          <Link to="/profile" title="View Profile">
            <img
              src={userProfile.avatar}
              alt={userProfile.name}
              className="header-user-avatar"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
