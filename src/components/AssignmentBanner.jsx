import React from "react";
import { Globe, BookOpen } from "lucide-react";

export default function AssignmentBanner() {
  return (
    <div className="assignment-banner">
      <div className="assignment-banner-inner">
        <div className="banner-left">
          <span className="academic-badge">COLLEGE SUBMISSION</span>
          <div className="banner-details">
            <BookOpen size={14} />
            <span>
              <strong>Design Process and Perspective</strong> • Assignment 2
            </span>
            <span>|</span>
            <span>
              Roll No: <strong>4</strong> • Question: <strong>1</strong>
            </span>
          </div>
        </div>

        <div className="banner-theme">
          <Globe size={14} />
          <span>UN SDG 9: Industry, Innovation and Infrastructure</span>
        </div>
      </div>
    </div>
  );
}
