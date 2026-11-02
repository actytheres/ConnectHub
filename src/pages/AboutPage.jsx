import React, { useState } from "react";
import {
  Globe,
  CheckCircle2,
  Calculator,
  Compass
} from "lucide-react";
import { SDG9_PILLARS } from "../data/initialData";

export default function AboutPage() {
  // Interactive SDG 9 Impact Estimator State
  const [projectDomain, setProjectDomain] = useState("bridge");
  const [lifespanYears, setLifespanYears] = useState(45);
  const [carbonSaved, setCarbonSaved] = useState(38);
  const [isOpenHardware, setIsOpenHardware] = useState(true);

  // Calculate score
  const calculateScore = () => {
    let base = 50;
    base += Math.round(carbonSaved * 0.3); // max +30
    base += Math.round(lifespanYears * 0.15); // max +15
    if (isOpenHardware) base += 10;
    return Math.min(100, Math.max(0, base));
  };

  const score = calculateScore();

  const getRating = (s) => {
    if (s >= 90) return { label: "SDG 9 Global Pioneer", color: "#10b981" };
    if (s >= 75) return { label: "High Impact Benchmark", color: "#0284c7" };
    return { label: "Developing Innovation", color: "#f35b25" };
  };

  const rating = getRating(score);

  return (
    <div className="content-area about-container">
      {/* 1. Academic Assignment Hero Card */}
      <div className="assignment-academic-card">
        <span className="academic-tagline">
          Academic Project Submission • DPP Assignment 2
        </span>
        <h1 className="academic-main-title">
          ConnectHub: A Collaborative Social Platform for UN SDG 9
        </h1>
        <p style={{ color: "#e2e8f0", fontSize: "0.95rem", lineHeight: 1.6 }}>
          Designed and built for <strong>Design Process and Perspective Assignment 2</strong>,
          fulfilling <strong>Question 1</strong> by student <strong>Roll No. 4</strong>.
          The project addresses <strong>UN Sustainable Development Goal 9: Industry, Innovation and Infrastructure</strong>.
        </p>

        <div className="academic-table">
          <div>
            <div className="academic-item-label">Course Name</div>
            <div className="academic-item-value">Design Process & Perspective</div>
          </div>
          <div>
            <div className="academic-item-label">Assignment</div>
            <div className="academic-item-value">Assignment 2 (Q1)</div>
          </div>
          <div>
            <div className="academic-item-label">Candidate Roll No.</div>
            <div className="academic-item-value">Roll No. 4</div>
          </div>
          <div>
            <div className="academic-item-label">Target Goal</div>
            <div className="academic-item-value">UN SDG 9 (Industry & Infra)</div>
          </div>
        </div>
      </div>

      {/* 2. Platform Vision & Objectives */}
      <div className="widget-card">
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
          <Compass size={22} color="var(--primary)" />
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 800 }}>
            What is ConnectHub?
          </h2>
        </div>
        <p style={{ fontSize: "0.95rem", color: "#334155", lineHeight: 1.7, marginBottom: "16px" }}>
          ConnectHub is a specialized digital ecosystem built to accelerate
          cross-disciplinary engineering and scientific collaboration. In modern academia,
          valuable research in civil resilience, green retrofitting, and automation often remains
          trapped inside lab papers. ConnectHub provides a peer-driven social feed, verifiable
          impact metrics, and open innovation sharing tailored specifically for student researchers,
          professors, and clean-tech startups.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px" }}>
          <div style={{ padding: "14px", background: "var(--bg-muted)", borderRadius: "var(--radius-lg)" }}>
            <h4 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--primary)", marginBottom: "4px" }}>
              1. Open R&D Dissemination
            </h4>
            <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
              Rapidly share field prototypes, telemetry sensor results, and open-source CAD designs.
            </p>
          </div>

          <div style={{ padding: "14px", background: "var(--bg-muted)", borderRadius: "var(--radius-lg)" }}>
            <h4 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--sdg-orange)", marginBottom: "4px" }}>
              2. Peer Peer Review
            </h4>
            <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
              Engage with faculty mentors, fellow engineering cohorts, and startup founders.
            </p>
          </div>

          <div style={{ padding: "14px", background: "var(--bg-muted)", borderRadius: "var(--radius-lg)" }}>
            <h4 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--accent-green)", marginBottom: "4px" }}>
              3. Measurable Impact
            </h4>
            <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
              Every post highlights quantifiable carbon, durability, and resilience metrics.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Deep Dive into UN SDG 9 Framework */}
      <div className="widget-card">
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <Globe size={22} color="var(--sdg-orange)" />
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 800 }}>
            UN Sustainable Development Goal 9 Pillars
          </h2>
        </div>

        <div className="explore-pillars-grid">
          {SDG9_PILLARS.map((pillar) => (
            <div key={pillar.id} className="pillar-card">
              <span className="pillar-target-tag">{pillar.target}</span>
              <h3 style={{ fontSize: "1.05rem" }}>{pillar.title}</h3>
              <p style={{ fontSize: "0.85rem" }}>{pillar.description}</p>
              <div className="pillar-metric-footer">
                {pillar.metrics}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Interactive SDG 9 Impact Estimator Widget */}
      <div className="calculator-card">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Calculator size={22} color="var(--primary)" />
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 800 }}>
              Interactive SDG 9 Resilience & Impact Estimator
            </h3>
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
              Evaluate your prospective infrastructure or industrial prototype against key sustainability parameters.
            </p>
          </div>
        </div>

        <div className="calc-grid">
          {/* Controls */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div className="form-group">
              <label className="form-label">Project Domain</label>
              <select
                className="form-select"
                value={projectDomain}
                onChange={(e) => setProjectDomain(e.target.value)}
              >
                <option value="bridge">Resilient Civil Bridges & Viaducts (Target 9.1)</option>
                <option value="heat">Industrial Thermodynamic Retrofit (Target 9.4)</option>
                <option value="microgrid">Off-Grid Solar Telemetry (Target 9.a)</option>
                <option value="robotics">Autonomous Transit Robotics (Target 9.5)</option>
              </select>
            </div>

            <div className="form-group">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label className="form-label">Expected Infrastructure Lifespan</label>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--primary)" }}>
                  {lifespanYears} Years
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                value={lifespanYears}
                onChange={(e) => setLifespanYears(Number(e.target.value))}
                style={{ width: "100%", accentColor: "var(--primary)" }}
              />
            </div>

            <div className="form-group">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label className="form-label">Estimated Carbon / Energy Saved</label>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--accent-green)" }}>
                  {carbonSaved}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="90"
                value={carbonSaved}
                onChange={(e) => setCarbonSaved(Number(e.target.value))}
                style={{ width: "100%", accentColor: "var(--accent-green)" }}
              />
            </div>

            <label style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.88rem", cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={isOpenHardware}
                onChange={(e) => setIsOpenHardware(e.target.checked)}
                style={{ width: "18px", height: "18px", accentColor: "var(--primary)" }}
              />
              <span>Includes Open-Source Hardware / Reusable Telemetry (Target 9.b)</span>
            </label>
          </div>

          {/* Results Display */}
          <div className="calc-result-box">
            <span style={{ fontSize: "0.78rem", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Calculated SDG 9 Score
            </span>
            <div className="score-display-number">{score} / 100</div>
            <div className="score-rating-pill" style={{ background: rating.color }}>
              {rating.label}
            </div>
            <p style={{ fontSize: "0.82rem", color: "#cbd5e1", lineHeight: 1.5, marginTop: "6px" }}>
              {score >= 90
                ? "Excellent resilience characteristics! Directly satisfies both durability standards and environmental emissions retrofits."
                : score >= 75
                ? "Strong technical contribution towards regional sustainable infrastructure with notable life extension."
                : "Good baseline design. Increasing open-source telemetry and carbon capture will elevate its score."}
            </p>
          </div>
        </div>
      </div>

      {/* 5. Design Process & Perspective Academic Statement */}
      <div className="widget-card">
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 800, marginBottom: "10px" }}>
          Design Process & Perspective Reflection (Roll No. 4)
        </h3>
        <p style={{ fontSize: "0.9rem", color: "#334155", lineHeight: 1.65, marginBottom: "12px" }}>
          In answering <strong>Question 1</strong> of <strong>Assignment 2</strong>, the design perspective
          focuses on human-centered UI/UX principles to facilitate complex technological discourse.
          By framing technical parameters—such as sensor frequency, thermodynamic heat efficiency,
          and bridge strain metrics—into digestible cards, stories, and calculators, ConnectHub democratizes
          participation in UN SDG 9 without compromising scientific rigor.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "var(--primary)", fontWeight: 600 }}>
          <CheckCircle2 size={16} />
          <span>Front-end prototype tested for mobile, tablet, and widescreen layouts.</span>
        </div>
      </div>
    </div>
  );
}
