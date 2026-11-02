import React from "react";
import { X, Sparkles } from "lucide-react";

export default function StoryModal({ story, onClose }) {
  if (!story) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content-card"
        style={{ maxWidth: "460px", padding: 0, overflow: "hidden" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ position: "relative", height: "340px", background: "#000" }}>
          <img
            src={story.storyImage}
            alt={story.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />

          <button
            onClick={onClose}
            className="btn-icon"
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              background: "rgba(0,0,0,0.6)",
              color: "#fff",
              border: "none"
            }}
          >
            <X size={18} />
          </button>

          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "20px",
              background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
              color: "#fff"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <img
                src={story.authorAvatar}
                alt={story.authorName}
                style={{ width: "36px", height: "36px", borderRadius: "50%", border: "2px solid #fff" }}
              />
              <div>
                <strong style={{ fontSize: "0.9rem" }}>{story.authorName}</strong>
                <div style={{ fontSize: "0.75rem", color: "#38bdf8" }}>{story.tag}</div>
              </div>
            </div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 800 }}>{story.title}</h3>
          </div>
        </div>

        <div style={{ padding: "20px" }}>
          <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "18px" }}>
            {story.preview}
          </p>

          <button
            className="btn-primary"
            style={{ width: "100%" }}
            onClick={onClose}
          >
            <Sparkles size={16} />
            <span>Support This Innovation</span>
          </button>
        </div>
      </div>
    </div>
  );
}
