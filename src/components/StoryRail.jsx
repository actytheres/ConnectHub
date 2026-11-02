import React, { useState } from "react";
import { useApp } from "../context/useApp";
import StoryModal from "./StoryModal";

export default function StoryRail() {
  const { stories, userProfile } = useApp();
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <>
      <div className="stories-container">
        <div className="stories-rail">
          {/* User's own story prompt */}
          <div
            className="story-item"
            onClick={() =>
              setSelectedStory({
                id: "user-self",
                authorName: userProfile.name,
                authorAvatar: userProfile.avatar,
                title: "Resilient Lab Demo",
                storyImage: userProfile.banner,
                tag: "#CampusSDG9",
                preview: "Showcasing student sensor telemetry benchmarks for Assignment 2 (Roll No. 4)."
              })
            }
          >
            <div className="story-avatar-wrapper" style={{ background: "linear-gradient(135deg, #10b981 0%, #0284c7 100%)" }}>
              <div className="story-avatar-inner">
                <img src={userProfile.avatar} alt={userProfile.name} />
              </div>
            </div>
            <span className="story-label">Your Lab</span>
          </div>

          {/* Stories from peers & researchers */}
          {stories.map((story) => (
            <div
              key={story.id}
              className="story-item"
              onClick={() => setSelectedStory(story)}
            >
              <div className="story-avatar-wrapper">
                <div className="story-avatar-inner">
                  <img src={story.authorAvatar} alt={story.authorName} />
                </div>
              </div>
              <span className="story-label">{story.authorName}</span>
            </div>
          ))}
        </div>
      </div>

      {selectedStory && (
        <StoryModal
          story={selectedStory}
          onClose={() => setSelectedStory(null)}
        />
      )}
    </>
  );
}
