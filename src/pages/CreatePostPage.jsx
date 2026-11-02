import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  Send,
  TrendingUp,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { useApp } from "../context/useApp";
import { PRESET_POST_IMAGES } from "../data/initialData";

const CATEGORIES = [
  "Sustainable Infrastructure",
  "Clean Industry",
  "R&D & Innovation",
  "Smart Mobility"
];

const SDG_TARGETS = [
  "SDG 9.1: Resilient Infrastructure",
  "SDG 9.2: Inclusive Industrialization",
  "SDG 9.4: Upgrade Sustainable Industries",
  "SDG 9.5: Enhance Scientific Research & Innovation",
  "SDG 9.a: Sustainable Infrastructure Tech & Financing"
];

export default function CreatePostPage() {
  const { userProfile, createPost } = useApp();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Sustainable Infrastructure");
  const [sdgTarget, setSdgTarget] = useState("SDG 9.1: Resilient Infrastructure");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState(PRESET_POST_IMAGES[0].url);
  const [metricLabel, setMetricLabel] = useState("Impact Metric");
  const [metricValue, setMetricValue] = useState("+40% Efficiency");
  const [error, setError] = useState("");

  const handleSelectPreset = (url) => {
    setImageUrl(url);
  };

  const handlePublish = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Please provide a title for your innovation post.");
      return;
    }
    if (!content.trim() || content.trim().length < 20) {
      setError("Please provide a more detailed description of your project (at least 20 characters).");
      return;
    }

    createPost({
      title: title.trim(),
      category,
      sdgTarget,
      content: content.trim(),
      image: imageUrl.trim() || null,
      metricLabel: metricLabel.trim() || "Target Impact",
      metricValue: metricValue.trim() || "Active Milestone"
    });

    navigate("/");
  };

  return (
    <div className="content-area">
      <div className="create-page-grid">
        {/* Left: Form Card */}
        <div className="create-form-card">
          <div>
            <span className="sdg-badge" style={{ marginBottom: "8px" }}>
              <Sparkles size={13} />
              <span>ConnectHub Creator Studio</span>
            </span>
            <h1 className="form-header-title">Publish Innovation Post</h1>
            <p className="form-subline">
              Share your research paper, engineering prototype, or SDG 9 initiative with the academic community.
            </p>
          </div>

          {error && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 14px",
                background: "#fef2f2",
                border: "1px solid #fecaca",
                color: "#991b1b",
                borderRadius: "var(--radius-md)",
                fontSize: "0.85rem"
              }}
            >
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handlePublish} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {/* Title */}
            <div className="form-group">
              <label className="form-label">Innovation / Project Title *</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. IoT Sensor Deployment for Low-Carbon Bridges"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  setError("");
                }}
                maxLength={120}
                required
              />
            </div>

            {/* Category & SDG Target */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
              <div className="form-group">
                <label className="form-label">Category</label>
                <select
                  className="form-select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">UN SDG 9 Target Alignment</label>
                <select
                  className="form-select"
                  value={sdgTarget}
                  onChange={(e) => setSdgTarget(e.target.value)}
                >
                  {SDG_TARGETS.map((tgt) => (
                    <option key={tgt} value={tgt}>
                      {tgt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Description */}
            <div className="form-group">
              <label className="form-label">Project Details & Methodology *</label>
              <textarea
                className="form-textarea"
                placeholder="Explain the engineering challenge, testing procedure, materials or algorithm used, and how this directly accelerates SDG 9..."
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                  setError("");
                }}
                rows={5}
                required
              />
              <div className="char-counter">{content.length} characters</div>
            </div>

            {/* Preset High-Res Images */}
            <div className="form-group">
              <label className="form-label">Select Project Image / Visual</label>
              <div className="preset-images-scroll">
                {PRESET_POST_IMAGES.map((preset) => (
                  <div
                    key={preset.title}
                    className={`preset-thumb ${imageUrl === preset.url ? "selected" : ""}`}
                    onClick={() => handleSelectPreset(preset.url)}
                    title={preset.title}
                  >
                    <img src={preset.url} alt={preset.title} />
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Image URL */}
            <div className="form-group">
              <label className="form-label">Or Custom Image URL</label>
              <input
                type="url"
                className="form-input"
                placeholder="https://images.unsplash.com/..."
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>

            {/* Metrics */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
              <div className="form-group">
                <label className="form-label">Impact Metric Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Energy Reduction"
                  value={metricLabel}
                  onChange={(e) => setMetricLabel(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Metric Value</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. -35% Emissions"
                  value={metricValue}
                  onChange={(e) => setMetricValue(e.target.value)}
                />
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "10px" }}>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
              <button type="submit" className="btn-primary">
                <Send size={16} />
                <span>Publish to ConnectHub</span>
              </button>
            </div>
          </form>
        </div>

        {/* Right: Real-time Live Preview */}
        <div className="preview-sidebar">
          <div className="preview-sticky-box">
            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "10px", fontSize: "0.85rem", fontWeight: 700, color: "var(--text-secondary)" }}>
              <Sparkles size={15} color="var(--primary)" />
              <span>Live Post Preview</span>
            </div>

            <article className="post-card">
              <div className="post-header">
                <div className="post-author-group">
                  <img
                    src={userProfile.avatar}
                    alt={userProfile.name}
                    className="post-author-avatar"
                  />
                  <div className="post-author-info">
                    <div className="post-author-name-row">
                      <span className="post-author-name">{userProfile.name}</span>
                      <CheckCircle2 className="verified-icon" />
                    </div>
                    <span className="post-author-role">{userProfile.role}</span>
                    <div className="post-meta-subline">
                      <span>Just now</span>
                      <span>•</span>
                      <span className="category-tag">{category}</span>
                    </div>
                  </div>
                </div>

                <span className="sdg-badge">
                  <Sparkles size={11} />
                  {sdgTarget.split(":")[0]}
                </span>
              </div>

              <div className="post-body">
                <h3 className="post-title">
                  {title || "Your Innovation Title Here"}
                </h3>
                <p className="post-text">
                  {content || "Your detailed description will be previewed here. Explain your methodology, materials, and positive infrastructure impact..."}
                </p>

                {metricLabel && metricValue && (
                  <div className="post-metric-badge">
                    <TrendingUp size={16} />
                    <span>
                      {metricLabel}: <strong>{metricValue}</strong>
                    </span>
                  </div>
                )}
              </div>

              {imageUrl && (
                <div className="post-image-container">
                  <img src={imageUrl} alt="Preview" />
                </div>
              )}
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
