import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppProvider } from "./context/AppContext";

// Styles
import "./styles/theme.css";
import "./styles/layout.css";
import "./styles/components.css";
import "./styles/pages.css";

// Components
import AssignmentBanner from "./components/AssignmentBanner";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";
import ToastContainer from "./components/ToastContainer";

// Pages
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import CreatePostPage from "./pages/CreatePostPage";
import ProfilePage from "./pages/ProfilePage";
import NotificationsPage from "./pages/NotificationsPage";
import AboutPage from "./pages/AboutPage";

function AppLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="app-wrapper">
      {/* 1. Academic Header Banner */}
      <AssignmentBanner />

      {/* 2. Sticky Navbar */}
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      {/* 3. Main 3-Column Layout */}
      <main className="main-layout">
        {/* Left Sidebar */}
        <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

        {/* Central View Content */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/create" element={<CreatePostPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {/* Right Sidebar */}
        <RightSidebar />
      </main>

      {/* 4. Global Toast Notifications */}
      <ToastContainer />

      {/* 5. Academic Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--border-color)",
          padding: "24px 20px",
          background: "#ffffff",
          marginTop: "auto",
          textAlign: "center",
          fontSize: "0.825rem",
          color: "var(--text-secondary)"
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "6px" }}>
          <div>
            <strong>ConnectHub</strong> • Design Process and Perspective Assignment 2 | Roll No. 4 | Question 1
          </div>
          <div style={{ color: "var(--text-muted)", fontSize: "0.78rem" }}>
            Aligning Student Research with UN Sustainable Development Goal 9: Industry, Innovation and Infrastructure.
            (Front-end demonstration prototype with simulated local state).
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <AppLayout />
      </AppProvider>
    </BrowserRouter>
  );
}
