import React, { useState, useEffect } from "react";
import { AppContext } from "./context";
import {
  CURRENT_USER,
  INITIAL_POSTS,
  INITIAL_STORIES,
  SUGGESTED_INNOVATORS,
  INITIAL_NOTIFICATIONS,
  TRENDING_TOPICS
} from "../data/initialData";

export function AppProvider({ children }) {
  // 1. User Profile State (persisted)
  const [userProfile, setUserProfile] = useState(() => {
    try {
      const saved = localStorage.getItem("connecthub_user");
      return saved ? JSON.parse(saved) : CURRENT_USER;
    } catch {
      return CURRENT_USER;
    }
  });

  // 2. Posts State (persisted)
  const [posts, setPosts] = useState(() => {
    try {
      const saved = localStorage.getItem("connecthub_posts");
      return saved ? JSON.parse(saved) : INITIAL_POSTS;
    } catch {
      return INITIAL_POSTS;
    }
  });

  // 3. Innovators State (persisted)
  const [innovators, setInnovators] = useState(() => {
    try {
      const saved = localStorage.getItem("connecthub_innovators");
      return saved ? JSON.parse(saved) : SUGGESTED_INNOVATORS;
    } catch {
      return SUGGESTED_INNOVATORS;
    }
  });

  // 4. Notifications State (persisted)
  const [notifications, setNotifications] = useState(() => {
    try {
      const saved = localStorage.getItem("connecthub_notifications");
      return saved ? JSON.parse(saved) : INITIAL_NOTIFICATIONS;
    } catch {
      return INITIAL_NOTIFICATIONS;
    }
  });

  // 5. Search & Filters
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // 6. UI Toasts
  const [toasts, setToasts] = useState([]);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("connecthub_user", JSON.stringify(userProfile));
    } catch (e) {
      console.warn("Storage error", e);
    }
  }, [userProfile]);

  useEffect(() => {
    try {
      localStorage.setItem("connecthub_posts", JSON.stringify(posts));
    } catch (e) {
      console.warn("Storage error", e);
    }
  }, [posts]);

  useEffect(() => {
    try {
      localStorage.setItem("connecthub_innovators", JSON.stringify(innovators));
    } catch (e) {
      console.warn("Storage error", e);
    }
  }, [innovators]);

  useEffect(() => {
    try {
      localStorage.setItem("connecthub_notifications", JSON.stringify(notifications));
    } catch (e) {
      console.warn("Storage error", e);
    }
  }, [notifications]);

  // Toast Helper
  const showToast = (message, type = "info") => {
    const id = Date.now() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3800);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Like / Unlike Post
  const toggleLikePost = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          const isLiked = !post.isLiked;
          const likesCount = isLiked ? post.likesCount + 1 : Math.max(0, post.likesCount - 1);
          return { ...post, isLiked, likesCount };
        }
        return post;
      })
    );
  };

  // Save / Bookmark Post
  const toggleSavePost = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          const isSaved = !post.isSaved;
          showToast(isSaved ? "Saved to your bookmarked innovations!" : "Removed from saved posts.", "bookmark");
          return { ...post, isSaved };
        }
        return post;
      })
    );
  };

  // Add Comment to Post
  const addComment = (postId, commentText) => {
    if (!commentText.trim()) return;

    const newComment = {
      id: "c-" + Date.now(),
      author: userProfile.name,
      avatar: userProfile.avatar,
      handle: userProfile.handle,
      role: userProfile.role,
      text: commentText.trim(),
      timestamp: "Just now"
    };

    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [newComment, ...(post.comments || [])]
          };
        }
        return post;
      })
    );

    showToast("Comment published successfully!", "success");
  };

  // Create Post
  const createPost = ({
    title,
    category,
    sdgTarget,
    content,
    image,
    metricLabel,
    metricValue
  }) => {
    const newPost = {
      id: "post-" + Date.now(),
      author: {
        id: userProfile.id,
        name: userProfile.name,
        handle: userProfile.handle,
        role: userProfile.role,
        avatar: userProfile.avatar,
        verified: true
      },
      title: title || "New Innovation Initiative",
      category: category || "Sustainable Infrastructure",
      sdgTarget: sdgTarget || "SDG 9: Industry, Innovation & Infrastructure",
      timestamp: "Just now",
      content,
      image: image || null,
      metrics: metricLabel && metricValue ? { metricLabel, metricValue } : null,
      likesCount: 0,
      isLiked: false,
      isSaved: false,
      comments: []
    };

    setPosts((prev) => [newPost, ...prev]);

    // Update user stats
    setUserProfile((prev) => ({
      ...prev,
      postsCount: (prev.postsCount || 0) + 1,
      impactScore: (prev.impactScore || 1200) + 100
    }));

    showToast("Innovation post published! (+100 SDG 9 Impact Pts)", "success");
    return newPost;
  };

  // Delete Post
  const deletePost = (postId) => {
    setPosts((prev) => prev.filter((p) => p.id !== postId));
    setUserProfile((prev) => ({
      ...prev,
      postsCount: Math.max(0, (prev.postsCount || 1) - 1)
    }));
    showToast("Post removed from feed.", "info");
  };

  // Follow / Unfollow User
  const toggleFollowUser = (userId) => {
    setInnovators((prev) =>
      prev.map((innovator) => {
        if (innovator.id === userId) {
          const nextState = !innovator.isFollowing;
          const newFollowers = nextState ? innovator.followers + 1 : innovator.followers - 1;

          setUserProfile((u) => ({
            ...u,
            followingCount: nextState ? u.followingCount + 1 : Math.max(0, u.followingCount - 1)
          }));

          showToast(
            nextState ? `You are now following ${innovator.name}` : `Unfollowed ${innovator.name}`,
            "info"
          );

          return { ...innovator, isFollowing: nextState, followers: newFollowers };
        }
        return innovator;
      })
    );
  };

  // Edit Profile
  const updateProfile = (updatedFields) => {
    setUserProfile((prev) => ({
      ...prev,
      ...updatedFields
    }));
    showToast("Profile details updated successfully!", "success");
  };

  // Notifications
  const markAllNotificationsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    showToast("All notifications marked as read.", "info");
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <AppContext.Provider
      value={{
        userProfile,
        posts,
        stories: INITIAL_STORIES,
        innovators,
        trendingTopics: TRENDING_TOPICS,
        notifications,
        unreadCount,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        toasts,
        showToast,
        removeToast,
        toggleLikePost,
        toggleSavePost,
        addComment,
        createPost,
        deletePost,
        toggleFollowUser,
        updateProfile,
        markAllNotificationsRead
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
