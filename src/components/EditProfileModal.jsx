import React, { useState } from "react";
import { X, Save } from "lucide-react";
import { useApp } from "../context/useApp";

export default function EditProfileModal({ isOpen, onClose }) {
  const { userProfile, updateProfile } = useApp();

  const [name, setName] = useState(userProfile.name);
  const [role, setRole] = useState(userProfile.role);
  const [institution, setInstitution] = useState(userProfile.institution || "");
  const [bio, setBio] = useState(userProfile.bio);
  const [location, setLocation] = useState(userProfile.location || "");
  const [website, setWebsite] = useState(userProfile.website || "");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile({
      name,
      role,
      institution,
      bio,
      location,
      website
    });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 800 }}>
            Edit Researcher Profile
          </h3>
          <button className="btn-icon" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Professional Role / Student Title</label>
            <input
              type="text"
              className="form-input"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Institution / Academic Affiliation</label>
            <input
              type="text"
              className="form-input"
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Bio (Focus on SDG 9 Innovation)</label>
            <textarea
              className="form-textarea"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={3}
              required
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <div className="form-group">
              <label className="form-label">Campus / City</label>
              <input
                type="text"
                className="form-input"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Portfolio / Project Link</label>
              <input
                type="text"
                className="form-input"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "12px" }}>
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              <Save size={16} />
              <span>Save Changes</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
