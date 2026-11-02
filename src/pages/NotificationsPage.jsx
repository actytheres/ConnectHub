import React, { useState } from "react";
import {
  Bell,
  Heart,
  MessageCircle,
  UserPlus,
  Sparkles,
  CheckCheck
} from "lucide-react";
import { useApp } from "../context/useApp";

export default function NotificationsPage() {
  const { notifications, markAllNotificationsRead } = useApp();
  const [filter, setFilter] = useState("all");

  const filteredNotifs = notifications.filter((notif) => {
    if (filter === "unread") return !notif.read;
    if (filter === "likes") return notif.type === "like";
    if (filter === "comments") return notif.type === "comment";
    if (filter === "follows") return notif.type === "follow";
    if (filter === "sdg") return notif.type === "sdg";
    return true;
  });

  const getIcon = (type) => {
    switch (type) {
      case "like":
        return <Heart size={18} color="#e11d48" fill="#e11d48" />;
      case "comment":
        return <MessageCircle size={18} color="#0284c7" />;
      case "follow":
        return <UserPlus size={18} color="#10b981" />;
      case "sdg":
        return <Sparkles size={18} color="#f35b25" />;
      default:
        return <Bell size={18} color="var(--primary)" />;
    }
  };

  return (
    <div className="content-area notif-container">
      <div className="notif-header-strip">
        <div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", fontWeight: 800 }}>
            Notifications
          </h1>
          <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
            Stay updated with peer reviews, mentions, and SDG 9 community awards.
          </p>
        </div>

        <button
          className="btn-secondary"
          onClick={markAllNotificationsRead}
          style={{ fontSize: "0.82rem", padding: "6px 14px" }}
        >
          <CheckCheck size={16} />
          <span>Mark all as read</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="profile-nav-tabs" style={{ padding: "8px 16px" }}>
        <button
          className={`profile-tab-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`profile-tab-btn ${filter === "unread" ? "active" : ""}`}
          onClick={() => setFilter("unread")}
        >
          Unread
        </button>
        <button
          className={`profile-tab-btn ${filter === "likes" ? "active" : ""}`}
          onClick={() => setFilter("likes")}
        >
          Likes
        </button>
        <button
          className={`profile-tab-btn ${filter === "comments" ? "active" : ""}`}
          onClick={() => setFilter("comments")}
        >
          Comments
        </button>
        <button
          className={`profile-tab-btn ${filter === "follows" ? "active" : ""}`}
          onClick={() => setFilter("follows")}
        >
          Followers
        </button>
        <button
          className={`profile-tab-btn ${filter === "sdg" ? "active" : ""}`}
          onClick={() => setFilter("sdg")}
        >
          SDG Badges
        </button>
      </div>

      {/* Notification List */}
      <div>
        {filteredNotifs.length > 0 ? (
          filteredNotifs.map((item) => (
            <div
              key={item.id}
              className={`notif-row ${!item.read ? "unread" : ""}`}
            >
              <div className="notif-icon-bubble" style={{ background: "#f1f5f9" }}>
                {getIcon(item.type)}
              </div>

              <img
                src={item.avatar}
                alt={item.user}
                style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }}
              />

              <div className="notif-body">
                <div className="notif-text">
                  <strong>{item.user}</strong> {item.content}
                </div>
                <div className="notif-time">{item.timestamp}</div>
              </div>

              {!item.read && (
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "var(--primary)"
                  }}
                />
              )}
            </div>
          ))
        ) : (
          <div style={{ textAlign: "center", padding: "48px 20px", color: "var(--text-muted)" }}>
            <Bell size={36} color="var(--border-hover)" style={{ margin: "0 auto 12px auto" }} />
            <p style={{ fontSize: "0.9rem" }}>No notifications under this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
