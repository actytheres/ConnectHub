import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  Building2,
  Cpu,
  Send
} from "lucide-react";
import { useApp } from "../context/useApp";

export default function PostComposer() {
  const { userProfile, createPost } = useApp();
  const navigate = useNavigate();

  const [isExpanded, setIsExpanded] = useState(false);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Sustainable Infrastructure");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    createPost({
      title: title.trim() || `${category} Breakthrough`,
      category,
      sdgTarget: "SDG 9: Industry, Innovation & Infrastructure",
      content: content.trim(),
      image: imageUrl.trim() || "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=900&auto=format&fit=crop&q=80",
      metricLabel: "Community Impact",
      metricValue: "Active Prototype"
    });

    // Reset
    setContent("");
    setTitle("");
    setImageUrl("");
    setIsExpanded(false);
  };

  return (
    <div className="composer-card">
      <div className="composer-top">
        <img
          src={userProfile.avatar}
          alt={userProfile.name}
          className="composer-avatar"
        />
        <div
          className="composer-fake-input"
          onClick={() => setIsExpanded(true)}
        >
          {isExpanded
            ? "Draft your SDG 9 innovation details below..."
            : "Share an innovation, infrastructure breakthrough, or research update..."}
        </div>
      </div>

      {isExpanded && (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <input
            type="text"
            className="form-input"
            placeholder="Post Title (e.g. IoT Sensor Deployment for Low-Carbon Bridges)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="form-textarea"
            placeholder="Describe your innovation, methodology, and how it advances UN Sustainable Development Goal 9..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={3}
            autoFocus
          />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Sustainable Infrastructure">Sustainable Infrastructure</option>
              <option value="Clean Industry">Clean Industry (SDG 9.4)</option>
              <option value="R&D & Innovation">R&D & Innovation (SDG 9.5)</option>
              <option value="Smart Mobility">Smart Mobility & Transit</option>
            </select>

            <input
              type="url"
              className="form-input"
              placeholder="Image URL (optional)"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "8px" }}>
            <button
              type="button"
              className="btn-secondary"
              style={{ fontSize: "0.82rem", padding: "6px 14px" }}
              onClick={() => setIsExpanded(false)}
            >
              Cancel
            </button>

            <div style={{ display: "flex", gap: "8px" }}>
              <button
                type="button"
                className="btn-secondary"
                style={{ fontSize: "0.82rem", padding: "6px 14px" }}
                onClick={() => navigate("/create")}
              >
                Open Studio Mode
              </button>
              <button
                type="submit"
                className="btn-primary"
                style={{ fontSize: "0.85rem", padding: "7px 18px" }}
                disabled={!content.trim()}
              >
                <Send size={15} />
                <span>Publish Post</span>
              </button>
            </div>
          </div>
        </form>
      )}

      {!isExpanded && (
        <div className="composer-actions-bar">
          <div className="composer-actions-left">
            <span
              className="composer-tag-chip"
              onClick={() => {
                setCategory("Sustainable Infrastructure");
                setIsExpanded(true);
              }}
            >
              <Building2 size={14} color="var(--primary)" />
              Infrastructure
            </span>
            <span
              className="composer-tag-chip"
              onClick={() => {
                setCategory("Clean Industry");
                setIsExpanded(true);
              }}
            >
              <Cpu size={14} color="var(--sdg-orange)" />
              Clean Industry
            </span>
            <span
              className="composer-tag-chip"
              onClick={() => {
                setCategory("R&D & Innovation");
                setIsExpanded(true);
              }}
            >
              <Sparkles size={14} color="var(--accent-green)" />
              R&D Lab
            </span>
          </div>

          <button
            className="btn-primary"
            style={{ fontSize: "0.84rem", padding: "8px 16px" }}
            onClick={() => navigate("/create")}
          >
            <Sparkles size={15} />
            <span>Studio</span>
          </button>
        </div>
      )}
    </div>
  );
}
