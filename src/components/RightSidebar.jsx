import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  TrendingUp,
  Users,
  ExternalLink,
  Check,
  UserPlus,
  BookOpen
} from "lucide-react";
import { useApp } from "../context/useApp";

export default function RightSidebar() {
  const { innovators, trendingTopics, toggleFollowUser, setSearchQuery } = useApp();
  const navigate = useNavigate();

  const handleTopicClick = (tag) => {
    setSearchQuery(tag);
    navigate("/explore");
  };

  return (
    <aside className="right-sidebar">
      {/* 1. SDG 9 Spotlight Widget */}
      <div className="sdg-spotlight-widget">
        <div className="sdg-tagline">UN Sustainable Development Goal 9</div>
        <h3 className="sdg-title">Industry, Innovation & Infrastructure</h3>
        <p className="sdg-desc">
          Building resilient infrastructure, promoting inclusive and sustainable
          industrialization, and fostering innovation.
        </p>

        <div className="sdg-stat-bar">
          <div className="sdg-stat-fill" style={{ width: "68%" }} />
        </div>
        <div className="sdg-stat-label">
          <span>Global 2030 Metric</span>
          <strong>68% Tracked</strong>
        </div>

        <Link to="/about" className="btn-secondary" style={{ width: "100%", justifyContent: "center" }}>
          <span>Learn SDG 9 Framework</span>
          <ExternalLink size={14} />
        </Link>
      </div>

      {/* 2. Trending Innovation Topics */}
      <div className="widget-card">
        <div className="widget-header">
          <h4 className="widget-title">
            <TrendingUp size={18} color="var(--primary)" />
            <span>Trending in SDG 9</span>
          </h4>
        </div>

        <div className="trending-list">
          {trendingTopics.map((item) => (
            <div
              key={item.tag}
              className="trending-item"
              onClick={() => handleTopicClick(item.tag)}
            >
              <div>
                <div className="trending-tag">{item.tag}</div>
                <div className="trending-count">{item.postsCount}</div>
              </div>
              <span className="category-tag">{item.category}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Suggested Innovators */}
      <div className="widget-card">
        <div className="widget-header">
          <h4 className="widget-title">
            <Users size={18} color="var(--accent-green)" />
            <span>Innovators to Follow</span>
          </h4>
        </div>

        <div className="innovators-list">
          {innovators.slice(0, 4).map((person) => (
            <div key={person.id} className="innovator-row">
              <div className="innovator-info">
                <img
                  src={person.avatar}
                  alt={person.name}
                  className="innovator-avatar"
                />
                <div className="innovator-text">
                  <div className="innovator-name" title={person.name}>
                    {person.name}
                  </div>
                  <div className="innovator-specialty">{person.specialty}</div>
                </div>
              </div>

              <button
                className={`follow-btn ${person.isFollowing ? "following" : ""}`}
                onClick={() => toggleFollowUser(person.id)}
              >
                {person.isFollowing ? (
                  <>
                    <Check size={13} />
                    <span>Following</span>
                  </>
                ) : (
                  <>
                    <UserPlus size={13} />
                    <span>Follow</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Assignment Academic Citation Card */}
      <div className="widget-card" style={{ background: "#f8fafc" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
          <BookOpen size={16} color="var(--primary)" />
          <strong style={{ fontSize: "0.85rem" }}>Academic Submission</strong>
        </div>
        <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
          <strong>Design Process and Perspective</strong><br />
          Assignment 2 • Roll No. 4 • Question 1<br />
          Theme: UN SDG 9 (Industry, Innovation & Infrastructure)
        </p>
      </div>
    </aside>
  );
}
