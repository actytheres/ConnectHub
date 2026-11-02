import React, { useState } from "react";
import {
  Compass,
  Building2,
  Cpu,
  Sparkles,
  Users,
  Check,
  UserPlus
} from "lucide-react";
import { useApp } from "../context/useApp";
import { SDG9_PILLARS } from "../data/initialData";
import PostCard from "../components/PostCard";

const TOPIC_TAGS = [
  "All",
  "#ResilientInfrastructure",
  "#BioConcrete",
  "#Industry40",
  "#CleanHydrogen",
  "#SmartMicrogrids",
  "#CivilRobotics"
];

export default function ExplorePage() {
  const {
    posts,
    innovators,
    toggleFollowUser,
    searchQuery
  } = useApp();

  const [activeTag, setActiveTag] = useState("All");

  const filteredPosts = posts.filter((post) => {
    const query = searchQuery.toLowerCase().trim();
    const tagMatch =
      activeTag === "All" ||
      post.content.toLowerCase().includes(activeTag.toLowerCase()) ||
      post.category.toLowerCase().includes(activeTag.replace("#", "").toLowerCase());

    const searchMatch =
      !query ||
      post.title.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query) ||
      post.author.name.toLowerCase().includes(query);

    return tagMatch && searchMatch;
  });

  return (
    <div className="content-area explore-container">
      {/* 1. Explore Hero Banner */}
      <div className="explore-hero">
        <span className="explore-badge">
          <Compass size={14} />
          <span>SDG 9 Discovery Portal</span>
        </span>
        <h1>Pioneering Sustainable Industry & Infrastructure</h1>
        <p>
          Connect with student engineers, academic researchers, and clean-tech
          startups advancing United Nations Sustainable Development Goal 9.
        </p>
      </div>

      {/* 2. Interactive SDG 9 Three Pillars */}
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "14px" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 800 }}>
            UN SDG 9 Core Pillars
          </h2>
          <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Targets 9.1 • 9.4 • 9.5</span>
        </div>

        <div className="explore-pillars-grid">
          {SDG9_PILLARS.map((pillar) => (
            <div key={pillar.id} className="pillar-card">
              <div
                className="pillar-icon-box"
                style={{ backgroundColor: pillar.color }}
              >
                {pillar.id === "pillar-1" && <Building2 size={22} />}
                {pillar.id === "pillar-2" && <Cpu size={22} />}
                {pillar.id === "pillar-3" && <Sparkles size={22} />}
              </div>

              <span className="pillar-target-tag">{pillar.target}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>

              <div className="pillar-metric-footer">
                💡 {pillar.metrics}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Discover Innovators Directory */}
      <div className="widget-card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "8px" }}>
            <Users size={18} color="var(--primary)" />
            <span>Discover Innovators & Researchers</span>
          </h3>
          <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
            {innovators.length} verified creators
          </span>
        </div>

        <div className="directory-grid">
          {innovators.map((innovator) => (
            <div key={innovator.id} className="directory-card">
              <img src={innovator.avatar} alt={innovator.name} />
              <div>
                <h4>{innovator.name}</h4>
                <div className="user-handle">@{innovator.handle}</div>
                <div className="user-role">{innovator.role}</div>
              </div>

              <span className="category-tag">{innovator.specialty}</span>

              <button
                className={`follow-btn ${innovator.isFollowing ? "following" : ""}`}
                style={{ width: "100%", marginTop: "6px" }}
                onClick={() => toggleFollowUser(innovator.id)}
              >
                {innovator.isFollowing ? (
                  <>
                    <Check size={14} />
                    <span>Following ({innovator.followers})</span>
                  </>
                ) : (
                  <>
                    <UserPlus size={14} />
                    <span>Follow ({innovator.followers})</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Filter Tags & Matching Innovations */}
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", flexWrap: "wrap", gap: "10px" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700 }}>
            Innovations & Field Research
          </h3>

          <div className="filter-pills-row">
            {TOPIC_TAGS.map((tag) => (
              <button
                key={tag}
                className={`filter-pill ${activeTag === tag ? "active" : ""}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
          ) : (
            <div className="widget-card" style={{ textAlign: "center", padding: "36px" }}>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                No innovations found matching this topic. Try another filter!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
