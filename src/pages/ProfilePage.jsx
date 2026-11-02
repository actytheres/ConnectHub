import React, { useState } from "react";
import {
  MapPin,
  Globe,
  Calendar,
  Award,
  CheckCircle2,
  Edit3,
  Share2,
  Bookmark,
  BookOpen
} from "lucide-react";
import { useApp } from "../context/useApp";
import PostCard from "../components/PostCard";
import EditProfileModal from "../components/EditProfileModal";

export default function ProfilePage() {
  const { userProfile, posts, showToast } = useApp();
  const [activeTab, setActiveTab] = useState("posts");
  const [editModalOpen, setEditModalOpen] = useState(false);

  // Filter posts
  const myPosts = posts.filter(
    (p) =>
      p.author.id === userProfile.id ||
      p.author.handle === userProfile.handle ||
      p.author.name.includes("Alex Morgan")
  );

  const savedPosts = posts.filter((p) => p.isSaved);

  const handleShareProfile = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast("Profile link copied to clipboard!", "info");
    } else {
      showToast("Profile link ready to share!", "info");
    }
  };

  return (
    <div className="content-area profile-container">
      {/* 1. Profile Header Card */}
      <div className="profile-card-header">
        <div className="profile-banner">
          <img src={userProfile.banner} alt="Profile banner" />
        </div>

        <div className="profile-header-body">
          <div className="profile-avatar-row">
            <img
              src={userProfile.avatar}
              alt={userProfile.name}
              className="profile-main-avatar"
            />

            <div style={{ display: "flex", gap: "10px" }}>
              <button
                className="btn-secondary"
                onClick={handleShareProfile}
                title="Share Profile Link"
              >
                <Share2 size={16} />
                <span>Share</span>
              </button>

              <button
                className="btn-primary"
                onClick={() => setEditModalOpen(true)}
              >
                <Edit3 size={16} />
                <span>Edit Profile</span>
              </button>
            </div>
          </div>

          <div className="profile-name-area">
            <h1 className="profile-user-fullname">
              <span>{userProfile.name}</span>
              <CheckCircle2 size={20} color="var(--primary)" />
            </h1>
            <div className="profile-handle-tag">@{userProfile.handle}</div>
            <div className="profile-role-title">{userProfile.role}</div>
            {userProfile.institution && (
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                {userProfile.institution}
              </div>
            )}
          </div>

          <p className="profile-bio-text">{userProfile.bio}</p>

          <div className="profile-meta-chips">
            {userProfile.location && (
              <div className="profile-chip">
                <MapPin size={15} color="var(--text-muted)" />
                <span>{userProfile.location}</span>
              </div>
            )}
            {userProfile.website && (
              <div className="profile-chip">
                <Globe size={15} color="var(--primary)" />
                <a
                  href={userProfile.website}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "var(--primary)" }}
                >
                  {userProfile.website.replace("https://", "")}
                </a>
              </div>
            )}
            <div className="profile-chip">
              <Calendar size={15} color="var(--text-muted)" />
              <span>Joined {userProfile.joined || "September 2024"}</span>
            </div>
            <div className="profile-chip">
              <Award size={15} color="var(--sdg-orange)" />
              <span>DPP Assignment 2 • Roll No. 4</span>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="profile-stats-strip">
            <div className="profile-stat-box">
              <span className="stat-number">{myPosts.length}</span>
              <span className="stat-label">Innovations</span>
            </div>
            <div className="profile-stat-box">
              <span className="stat-number">{userProfile.followersCount}</span>
              <span className="stat-label">Followers</span>
            </div>
            <div className="profile-stat-box">
              <span className="stat-number">{userProfile.followingCount}</span>
              <span className="stat-label">Following</span>
            </div>
            <div className="profile-stat-box" style={{ marginLeft: "auto" }}>
              <span className="stat-number" style={{ color: "var(--primary)" }}>
                {userProfile.impactScore || 1240} pts
              </span>
              <span className="stat-label" style={{ color: "var(--primary)" }}>
                ⚡ SDG 9 Impact Score
              </span>
            </div>
          </div>
        </div>

        {/* Tab Bar */}
        <div className="profile-nav-tabs">
          <button
            className={`profile-tab-btn ${activeTab === "posts" ? "active" : ""}`}
            onClick={() => setActiveTab("posts")}
          >
            My Innovations ({myPosts.length})
          </button>
          <button
            className={`profile-tab-btn ${activeTab === "saved" ? "active" : ""}`}
            onClick={() => setActiveTab("saved")}
          >
            Saved Innovations ({savedPosts.length})
          </button>
          <button
            className={`profile-tab-btn ${activeTab === "badges" ? "active" : ""}`}
            onClick={() => setActiveTab("badges")}
          >
            SDG 9 Badges (4)
          </button>
          <button
            className={`profile-tab-btn ${activeTab === "assignment" ? "active" : ""}`}
            onClick={() => setActiveTab("assignment")}
          >
            Academic Credentials
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {activeTab === "posts" && (
          <>
            {myPosts.length > 0 ? (
              myPosts.map((post) => <PostCard key={post.id} post={post} />)
            ) : (
              <div className="widget-card" style={{ textAlign: "center", padding: "40px" }}>
                <p style={{ color: "var(--text-muted)" }}>You haven't published any innovation posts yet.</p>
              </div>
            )}
          </>
        )}

        {activeTab === "saved" && (
          <>
            {savedPosts.length > 0 ? (
              savedPosts.map((post) => <PostCard key={post.id} post={post} />)
            ) : (
              <div className="widget-card" style={{ textAlign: "center", padding: "40px" }}>
                <Bookmark size={36} color="var(--primary)" style={{ margin: "0 auto 10px auto" }} />
                <p style={{ color: "var(--text-muted)" }}>
                  You haven't bookmarked any innovations yet. Click the bookmark icon on any post to save it here.
                </p>
              </div>
            )}
          </>
        )}

        {activeTab === "badges" && (
          <div className="widget-card">
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700, marginBottom: "16px" }}>
              Verified SDG 9 Achievement Badges
            </h3>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
              <div style={{ border: "1px solid var(--border-color)", borderRadius: "var(--radius-lg)", padding: "16px", background: "#f8fafc" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "1.8rem" }}>🏗️</span>
                  <div>
                    <h4 style={{ fontSize: "0.95rem", fontWeight: 700 }}>Resilient Builder</h4>
                    <span style={{ fontSize: "0.72rem", color: "var(--primary)", fontWeight: 600 }}>Target 9.1</span>
                  </div>
                </div>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                  Published field research on resilient bridge vibration telemetry and lifetime extension.
                </p>
              </div>

              <div style={{ border: "1px solid var(--border-color)", borderRadius: "var(--radius-lg)", padding: "16px", background: "#f8fafc" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "1.8rem" }}>🏭</span>
                  <div>
                    <h4 style={{ fontSize: "0.95rem", fontWeight: 700 }}>CleanTech Pioneer</h4>
                    <span style={{ fontSize: "0.72rem", color: "var(--sdg-orange)", fontWeight: 600 }}>Target 9.4</span>
                  </div>
                </div>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                  Advocated industrial boiler retrofitting and closed-loop thermodynamic waste recovery.
                </p>
              </div>

              <div style={{ border: "1px solid var(--border-color)", borderRadius: "var(--radius-lg)", padding: "16px", background: "#f8fafc" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "1.8rem" }}>🔬</span>
                  <div>
                    <h4 style={{ fontSize: "0.95rem", fontWeight: 700 }}>R&D Contributor</h4>
                    <span style={{ fontSize: "0.72rem", color: "var(--accent-green)", fontWeight: 600 }}>Target 9.5</span>
                  </div>
                </div>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                  Conducted campus prototype testing with high reproducibility and open documentation.
                </p>
              </div>

              <div style={{ border: "1px solid var(--border-color)", borderRadius: "var(--radius-lg)", padding: "16px", background: "#f8fafc" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "1.8rem" }}>⚡</span>
                  <div>
                    <h4 style={{ fontSize: "0.95rem", fontWeight: 700 }}>Open Science Ally</h4>
                    <span style={{ fontSize: "0.72rem", color: "#8b5cf6", fontWeight: 600 }}>Target 9.b</span>
                  </div>
                </div>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                  Active participation in peer reviews and technical commentary across the student network.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "assignment" && (
          <div className="widget-card">
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <BookOpen size={20} color="var(--primary)" />
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 800 }}>
                Assignment Submission Metadata
              </h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.92rem", lineHeight: 1.6 }}>
              <div style={{ padding: "12px 16px", background: "#f1f5f9", borderRadius: "var(--radius-md)" }}>
                <strong>Course / Subject:</strong> Design Process and Perspective
              </div>
              <div style={{ padding: "12px 16px", background: "#f1f5f9", borderRadius: "var(--radius-md)" }}>
                <strong>Assignment Number:</strong> Assignment 2
              </div>
              <div style={{ padding: "12px 16px", background: "#f1f5f9", borderRadius: "var(--radius-md)" }}>
                <strong>Student Roll No.:</strong> 4
              </div>
              <div style={{ padding: "12px 16px", background: "#f1f5f9", borderRadius: "var(--radius-md)" }}>
                <strong>Question Number:</strong> Question 1
              </div>
              <div style={{ padding: "12px 16px", background: "#f1f5f9", borderRadius: "var(--radius-md)" }}>
                <strong>Theme / Alignment:</strong> UN Sustainable Development Goal 9: Industry, Innovation and Infrastructure
              </div>
              <div style={{ padding: "12px 16px", background: "#f1f5f9", borderRadius: "var(--radius-md)" }}>
                <strong>Design Philosophy:</strong> A collaborative social platform uniting young engineers, university labs, and sustainability startups to accelerate resilient civil infrastructure and clean industrialization.
              </div>
            </div>
          </div>
        )}
      </div>

      <EditProfileModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
      />
    </div>
  );
}
