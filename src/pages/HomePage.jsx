import React from "react";
import StoryRail from "../components/StoryRail";
import PostComposer from "../components/PostComposer";
import PostCard from "../components/PostCard";
import { useApp } from "../context/useApp";
import { Sparkles, Layers } from "lucide-react";

const CATEGORIES = [
  "All",
  "Sustainable Infrastructure",
  "Clean Industry",
  "R&D & Innovation",
  "Smart Mobility"
];

export default function HomePage() {
  const { posts, selectedCategory, setSelectedCategory, searchQuery } = useApp();

  const filteredPosts = posts.filter((post) => {
    // 1. Category Filter
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;

    // 2. Global Search Query
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      post.title.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query) ||
      post.author.name.toLowerCase().includes(query) ||
      (post.sdgTarget && post.sdgTarget.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="content-area">
      {/* 1. Stories Rail */}
      <StoryRail />

      {/* 2. Quick Post Composer */}
      <PostComposer />

      {/* 3. Feed Category Filter Bar */}
      <div className="feed-filter-bar">
        <div className="filter-pills-row">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-pill ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === "All" && <Sparkles size={13} style={{ marginRight: "4px" }} />}
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Posts Feed */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <div
            className="widget-card"
            style={{ textAlign: "center", padding: "48px 20px" }}
          >
            <Layers size={40} color="var(--primary)" style={{ margin: "0 auto 12px auto" }} />
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "6px" }}>
              No innovations found
            </h3>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "16px" }}>
              {searchQuery
                ? `No posts matched "${searchQuery}". Try a different keyword or category.`
                : `There are currently no posts under "${selectedCategory}".`}
            </p>
            <button
              className="btn-secondary"
              onClick={() => {
                setSelectedCategory("All");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
