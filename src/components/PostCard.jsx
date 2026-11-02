import React, { useState } from "react";
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  CheckCircle2,
  Trash2,
  Send,
  Sparkles,
  TrendingUp
} from "lucide-react";
import { useApp } from "../context/useApp";

export default function PostCard({ post }) {
  const {
    userProfile,
    toggleLikePost,
    toggleSavePost,
    addComment,
    deletePost,
    showToast
  } = useApp();

  const [commentsOpen, setCommentsOpen] = useState(false);
  const [commentInput, setCommentInput] = useState("");

  const isCurrentUserAuthor =
    post.author.id === userProfile.id ||
    post.author.handle === userProfile.handle ||
    post.author.name.includes("Alex Morgan");

  const handleShare = () => {
    const shareUrl = `${window.location.origin}/#${post.id}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        showToast("Innovation link copied to clipboard! Ready to share.", "info");
      }).catch(() => {
        showToast("Innovation post URL ready to share!", "info");
      });
    } else {
      showToast("Innovation post URL ready to share!", "info");
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentInput.trim()) return;
    addComment(post.id, commentInput);
    setCommentInput("");
  };

  return (
    <article className="post-card" id={post.id}>
      {/* Post Header */}
      <div className="post-header">
        <div className="post-author-group">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="post-author-avatar"
          />
          <div className="post-author-info">
            <div className="post-author-name-row">
              <span className="post-author-name">{post.author.name}</span>
              {post.author.verified && (
                <CheckCircle2 className="verified-icon" />
              )}
            </div>
            <span className="post-author-role">{post.author.role}</span>
            <div className="post-meta-subline">
              <span>{post.timestamp}</span>
              <span>•</span>
              <span className="category-tag">{post.category}</span>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {post.sdgTarget && (
            <span className="sdg-badge">
              <Sparkles size={12} />
              {post.sdgTarget}
            </span>
          )}

          {isCurrentUserAuthor && (
            <button
              className="btn-icon"
              style={{ width: "32px", height: "32px", color: "#ef4444" }}
              title="Delete post"
              onClick={() => deletePost(post.id)}
            >
              <Trash2 size={15} />
            </button>
          )}
        </div>
      </div>

      {/* Post Body */}
      <div className="post-body">
        {post.title && <h3 className="post-title">{post.title}</h3>}
        <p className="post-text">{post.content}</p>

        {/* Impact metric if present */}
        {post.metrics && (
          <div className="post-metric-badge">
            <TrendingUp size={16} />
            <span>
              {post.metrics.metricLabel}:{" "}
              <strong>{post.metrics.metricValue}</strong>
            </span>
          </div>
        )}
      </div>

      {/* Post Image */}
      {post.image && (
        <div className="post-image-container">
          <img src={post.image} alt={post.title || "Innovation preview"} loading="lazy" />
        </div>
      )}

      {/* Post Action Bar */}
      <div className="post-action-bar">
        <div className="action-buttons-group">
          {/* Like */}
          <button
            className={`post-action-btn ${post.isLiked ? "liked" : ""}`}
            onClick={() => toggleLikePost(post.id)}
            aria-label="Like post"
          >
            <Heart
              size={18}
              fill={post.isLiked ? "#e11d48" : "none"}
              color={post.isLiked ? "#e11d48" : "currentColor"}
            />
            <span>{post.likesCount}</span>
          </button>

          {/* Comment */}
          <button
            className="post-action-btn"
            onClick={() => setCommentsOpen(!commentsOpen)}
            aria-label="Comment on post"
          >
            <MessageCircle size={18} />
            <span>{post.comments ? post.comments.length : 0}</span>
          </button>

          {/* Share */}
          <button
            className="post-action-btn"
            onClick={handleShare}
            aria-label="Share post"
          >
            <Share2 size={18} />
            <span>Share</span>
          </button>
        </div>

        {/* Bookmark */}
        <button
          className={`btn-icon ${post.isSaved ? "saved" : ""}`}
          style={{
            color: post.isSaved ? "var(--primary)" : "var(--text-secondary)",
            background: post.isSaved ? "var(--primary-subtle)" : "var(--bg-card)"
          }}
          onClick={() => toggleSavePost(post.id)}
          aria-label="Save post"
          title={post.isSaved ? "Saved" : "Save Innovation"}
        >
          <Bookmark size={17} fill={post.isSaved ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Interactive Comments Drawer */}
      {commentsOpen && (
        <div className="comments-section">
          {/* Comment Composer */}
          <form className="comment-input-row" onSubmit={handleCommentSubmit}>
            <img
              src={userProfile.avatar}
              alt={userProfile.name}
              className="comment-avatar"
            />
            <div className="comment-input-box">
              <input
                type="text"
                placeholder="Add a constructive technical comment..."
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn-primary"
              style={{ padding: "8px 14px", fontSize: "0.82rem" }}
              disabled={!commentInput.trim()}
            >
              <Send size={14} />
            </button>
          </form>

          {/* Comments List */}
          {post.comments && post.comments.length > 0 ? (
            <div className="comments-list">
              {post.comments.map((comment) => (
                <div key={comment.id} className="comment-card">
                  <img
                    src={comment.avatar}
                    alt={comment.author}
                    className="comment-avatar"
                  />
                  <div className="comment-content">
                    <div className="comment-header">
                      <span className="comment-author">{comment.author}</span>
                      <span className="comment-time">{comment.timestamp}</span>
                    </div>
                    <p className="comment-text">{comment.text}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "12px", color: "var(--text-muted)", fontSize: "0.82rem" }}>
              Be the first researcher to comment on this innovation!
            </div>
          )}
        </div>
      )}
    </article>
  );
}
