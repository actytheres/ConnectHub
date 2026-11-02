# ConnectHub 🌐⚡
### A Modern Social Media Platform Championing UN Sustainable Development Goal 9

> **College Course:** Design Process and Perspective  
> **Assignment:** Assignment 2  
> **Student Roll No.:** 4  
> **Question:** Question 1  
> **Core Theme:** UN Sustainable Development Goal 9: Industry, Innovation and Infrastructure  
> **Stack:** React 19, Vite, React Router DOM, JavaScript (ES6+), CSS3  

---

## 📖 Overview

**ConnectHub** is an academic social media dashboard tailored for student researchers, civil/mechanical/software engineers, and clean-tech startups. The platform democratizes engineering collaboration, open-source telemetry, and sustainable industrial retrofitting aligned directly with **United Nations Sustainable Development Goal 9**.

### 🌍 Key Alignment with UN SDG 9 Pillars:
1. **Target 9.1 & 9.a — Resilient & Sustainable Infrastructure:**  
   Knowledge-sharing around vibration telemetry for bridges, self-healing bio-concrete, and decentralized off-grid solar microgrids.
2. **Target 9.2 & 9.4 — Clean & Sustainable Industrialization:**  
   Showcasing boiler heat recovery, industrial heat pumps, circular polymer geogrids, and factory energy retrofits.
3. **Target 9.5 & 9.b — Foster Innovation & Scientific Research:**  
   Open documentation for student prototypes, IoT sensor arrays, collaborative robotics, and domestic technology development.

---

## ✨ Features & Connected Pages

1. **Home Feed (`/`)**
   - **Interactive Story Rail:** Visual reels highlighting peer research (Smart Grid Lab, Bio-Concrete, Cobot Robotics, Rural LoRaWAN). Clicking opens the modal viewer.
   - **Quick Post Composer:** Type and publish innovation updates right from the home feed with category and image support.
   - **Feed Filter Pills:** Instant filtering by *All*, *Sustainable Infrastructure*, *Clean Industry*, *R&D & Innovation*, and *Smart Mobility*.
   - **Interactive Post Cards:**
     - Author details, role, verified badge, and SDG 9 target tags.
     - Project photography with Unsplash visuals.
     - Quantifiable sustainability metrics badge (e.g., `+35% Durability`, `-42% Emissions`).
     - Real-time like counter with toggled active state.
     - Expandable comments section: type and submit new comments with instant display.
     - Share button with clipboard link copy and animated toast alert.
     - Bookmark button saving posts to profile.

2. **Explore Portal (`/explore`)**
   - **Global Search:** Real-time query matching across post titles, descriptions, categories, and authors.
   - **Interactive 3-Pillar Cards:** Deep breakdown of Targets 9.1, 9.4, and 9.5 with key UN metrics.
   - **Innovators Directory:** Discover and follow peer researchers and professors with functional *Follow / Following* toggles.
   - **Trending Hashtags:** Quick jump to trending innovation tags like `#ResilientInfrastructure`, `#BioConcrete`, `#Industry40`.

3. **Creator Studio (`/create`)**
   - Dedicated post authoring studio with input validation.
   - Select UN SDG 9 targets and categories.
   - 1-click preset high-res image selector (Solar grids, Transit viaducts, Factory automation, Green buildings).
   - Custom impact metrics input (e.g., `-35% Carbon`, `99.8% Uptime`).
   - **Real-Time Live Card Preview:** Sticky reactive card showing exactly how the post will look before publishing.

4. **My Profile (`/profile`)**
   - Academic researcher profile for **Alex Morgan (Roll No. 4 Lead)**.
   - Follower, Following, Posts count, and dynamic SDG Impact Score.
   - **Edit Profile Modal:** Update full name, role, institution, bio, location, and website.
   - **Tabbed Views:**
     - *My Innovations:* Authored posts with instant delete capability.
     - *Saved Innovations:* Bookmarked posts.
     - *SDG 9 Badges:* Verified achievement credentials (*Resilient Builder*, *CleanTech Pioneer*, *R&D Contributor*, *Open Science Ally*).
     - *Academic Credentials:* Complete submission details for DPP Assignment 2, Roll No. 4, Question 1.

5. **Notifications (`/notifications`)**
   - Filterable alerts: *All*, *Unread*, *Likes*, *Comments*, *Follows*, *SDG Badges*.
   - Working "Mark all as read" action.
   - Unread dot badge in top navigation.

6. **About & SDG 9 Framework (`/about`)**
   - Full academic context and design methodology explanation.
   - **Interactive SDG 9 Resilience & Impact Estimator:** An interactive calculator allowing users to adjust infrastructure lifespan, carbon reduction %, and open-hardware inclusion to compute an instant SDG 9 score out of 100 with a tier rating (*Global Pioneer*, *High Impact Benchmark*).

---

## 🚀 Running Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Steps
1. Open PowerShell or Command Prompt in the `connecthub` folder:
   ```bash
   cd C:\Users\there\connecthub
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to:
   ```
   http://localhost:5173/
   ```

---

## 🏗️ Production Build

To verify and test production assets:
```bash
npm run build
npm run preview
```
The output is generated inside the `dist/` directory, along with `public/_redirects` for Netlify SPA routing.

---

## 🌐 Deploying to GitHub and Netlify

### Step 1: Push to GitHub
1. In your `connecthub` directory, initialize a Git repository (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit of ConnectHub for DPP Assignment 2 Roll No. 4"
   ```
2. Create a new repository on [GitHub](https://github.com/new) named `connecthub`.
3. Link and push your code:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/connecthub.git
   git push -u origin main
   ```

### Step 2: Deploy to Netlify

#### Option A: One-Click Git Integration (Recommended)
1. Sign in to [Netlify](https://app.netlify.com/).
2. Click **"Add new site"** > **"Import an existing project"**.
3. Choose **GitHub** and select your `connecthub` repository.
4. Netlify will auto-detect the Vite build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **"Deploy ConnectHub"**.
6. The `public/_redirects` file (`/* /index.html 200`) ensures smooth client-side routing on all page refreshes.

#### Option B: Manual Drag-and-Drop Deploy
1. Run `npm run build` in your project folder to generate the `dist` folder.
2. Go to [Netlify Drop](https://app.netlify.com/drop).
3. Drag and drop the `dist` folder directly into Netlify.
4. Your site will be live instantly with a free `.netlify.app` URL!

---

## 📋 Academic Disclaimer

ConnectHub is a front-end demonstration prototype designed for **Design Process and Perspective Assignment 2, Roll No. 4, Question 1**. All social data, user profiles, and metrics are simulated with browser `localStorage` persistence and do not communicate with an external live database.
