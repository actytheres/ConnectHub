// Initial sample data for ConnectHub - Aligned with UN SDG 9: Industry, Innovation and Infrastructure
// Design Process and Perspective Assignment 2, Roll No. 4, Question 1

export const CURRENT_USER = {
  id: "user-alex-roll4",
  name: "Alex Morgan",
  handle: "alex_morgan_roll4",
  role: "Lead Innovator & Systems Eng Student",
  institution: "Faculty of Technology & Innovation • Roll No. 4",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
  banner: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80",
  bio: "Engineering student researcher specializing in resilient urban infrastructure and IoT structural sensors. Working on DPP Assignment 2 (Roll No. 4, Q1) targeting UN SDG 9. Building sustainable, tech-enabled communities. 🌍⚡",
  location: "Innovation Campus, Tech District",
  website: "https://connecthub-sdg9.netlify.app",
  joined: "September 2024",
  followersCount: 342,
  followingCount: 89,
  postsCount: 5,
  impactScore: 1240,
  assignmentMeta: {
    course: "Design Process and Perspective",
    assignment: "Assignment 2",
    rollNo: "4",
    question: "Question 1",
    theme: "UN Sustainable Development Goal 9: Industry, Innovation and Infrastructure"
  }
};

export const INITIAL_STORIES = [
  {
    id: "story-1",
    authorName: "Maya Lin",
    authorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80",
    title: "Smart Grid Lab",
    storyImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=80",
    tag: "#CleanEnergy",
    preview: "Testing autonomous load balancing on campus microgrid."
  },
  {
    id: "story-2",
    authorName: "Rohan Patel",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    title: "Bio-Concrete",
    storyImage: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800&auto=format&fit=crop&q=80",
    tag: "#ResilientBridges",
    preview: "Bacteria-infused self-healing concrete for rural overpasses."
  },
  {
    id: "story-3",
    authorName: "Dr. Chen Wei",
    authorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80",
    title: "Cobot Robotics",
    storyImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80",
    tag: "#Industry40",
    preview: "Human-robot collaborative assembly line in student maker space."
  },
  {
    id: "story-4",
    authorName: "Amina Yusuf",
    authorAvatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&auto=format&fit=crop&q=80",
    title: "Rural LoRaWAN",
    storyImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80",
    tag: "#Connectivity",
    preview: "Deploying low-cost IoT broadband gateways in off-grid villages."
  },
  {
    id: "story-5",
    authorName: "Liam O'Connor",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    title: "3D Printed Hub",
    storyImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
    tag: "#SustainableFab",
    preview: "Rapid additive manufacturing using recycled PET polymers."
  }
];

export const INITIAL_POSTS = [
  {
    id: "post-1",
    author: {
      id: "user-alex-roll4",
      name: "Alex Morgan (Roll No. 4)",
      handle: "alex_morgan_roll4",
      role: "SDG 9 Student Researcher • ConnectHub Lead",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
      verified: true
    },
    title: "IoT Telemetry for Resilient Bridge Infrastructure — Campus Prototype",
    category: "Sustainable Infrastructure",
    sdgTarget: "SDG 9.1: Resilient Infrastructure",
    timestamp: "2 hours ago",
    content: "Thrilled to share Phase 1 of our campus bridge monitoring system! We deployed solar-powered piezoelectric sensors along the eastern pedestrian bridge to continuously track vibration harmonics and early micro-fractures. By feeding real-time stress data into our predictive analytics model, we can extend civil infrastructure lifespan by up to 35% without expensive manual audits. Every community deserves safe, durable connectivity. 🏗️📡💡 #UNSDG9 #ResilientInfrastructure #SmartCities #CivilTech",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=900&auto=format&fit=crop&q=80",
    metrics: {
      metricLabel: "Lifespan Extension",
      metricValue: "+35% Durability"
    },
    likesCount: 48,
    isLiked: false,
    isSaved: false,
    comments: [
      {
        id: "c1",
        author: "Priya Nair",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
        handle: "priya_nair",
        role: "Structural Design Student",
        text: "Incredible work Alex! What frequency sampling rate are your piezoelectric units using to prevent noise from foot traffic?",
        timestamp: "1 hour ago"
      },
      {
        id: "c2",
        author: "Dr. Arvind Mehta",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80",
        handle: "dr_mehta_iit",
        role: "Professor of Materials Science",
        text: "Outstanding design alignment with Target 9.1. Let's look into publishing your data at the upcoming Sustainable Materials Symposium.",
        timestamp: "35 mins ago"
      }
    ]
  },
  {
    id: "post-2",
    author: {
      id: "user-tara-green",
      name: "Tara GreenTech Innovations",
      handle: "taragreentech",
      role: "CleanTech Startup Incubator Fellow",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80",
      verified: true
    },
    title: "Retrofitting Legacy Industrial Boilers with Industrial Heat Pumps",
    category: "Clean Industry",
    sdgTarget: "SDG 9.4: Upgrade Sustainable Industries",
    timestamp: "4 hours ago",
    content: "Industrial manufacturing accounts for nearly 30% of global greenhouse emissions, mostly through low-temperature process heat. Our student-led startup designed a retrofittable closed-loop heat pump that captures wasted industrial flue heat and turns it back into steam. We just wrapped our pilot run at the university steam plant: 42% energy reduction and zero localized soot! Retrofitting existing plants is how we achieve inclusive industrial decarbonization today. 🏭♻️🌱 #Industry40 #CleanTech #EnergyEfficiency #SustainableManufacturing",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=900&auto=format&fit=crop&q=80",
    metrics: {
      metricLabel: "Carbon Footprint",
      metricValue: "-42% Emissions"
    },
    likesCount: 112,
    isLiked: true,
    isSaved: true,
    comments: [
      {
        id: "c3",
        author: "Marcus Vance",
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80",
        handle: "marcus_vance",
        role: "Industrial Automation Engineer",
        text: "This is exactly what SDG 9.4 calls for. Upgrading existing facilities is far faster and more cost-effective than tearing them down and rebuilding.",
        timestamp: "2 hours ago"
      }
    ]
  },
  {
    id: "post-3",
    author: {
      id: "user-fatima-iot",
      name: "Fatima Al-Mansoor",
      handle: "fatima_urban_ai",
      role: "Smart Infrastructure Researcher",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
      verified: true
    },
    title: "Decentralized Solar Microgrid Controller for Remote Healthcare Centers",
    category: "R&D & Innovation",
    sdgTarget: "SDG 9.a: Sustainable Infrastructure Financing & Tech",
    timestamp: "7 hours ago",
    content: "Reliable power infrastructure is a fundamental prerequisite for quality medical care. In our Capstone laboratory, we engineered an edge-computing microgrid dispatch unit utilizing local open-source hardware. It intelligently allocates solar battery power during peak hospital surgeries and cooling for vaccines. Field tests show a 99.8% uptime index over 120 days. Technology innovation is most powerful when it protects the vulnerable. ☀️🔋🏥 #OpenHardware #RuralInfrastructure #SolarTech #MedicalEngineering",
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=900&auto=format&fit=crop&q=80",
    metrics: {
      metricLabel: "Grid Reliability",
      metricValue: "99.8% Uptime"
    },
    likesCount: 76,
    isLiked: false,
    isSaved: false,
    comments: []
  },
  {
    id: "post-4",
    author: {
      id: "user-dev-kumar",
      name: "Dev Kumar",
      handle: "dev_kumar_robotics",
      role: "Robotics & Automation Society Lead",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80",
      verified: false
    },
    title: "Autonomous Inspection Drones for Railway and Viaduct Safety",
    category: "Smart Mobility",
    sdgTarget: "SDG 9.1: Regional & Transborder Infrastructure",
    timestamp: "12 hours ago",
    content: "Manual railway track inspections across hundreds of kilometers are hazardous, slow, and prone to human fatigue. Our robotics club built an AI computer-vision payload for lightweight drones that flags track misalignment and ballast erosion in under 20 milliseconds per frame. Safer transit infrastructure keeps supply chains resilient and communities linked! Check out our test run video in our bio. 🚆🛰️🤖 #TransportInfrastructure #DronesInEngineering #AIforGood #LogisticsResilience",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=900&auto=format&fit=crop&q=80",
    metrics: {
      metricLabel: "Inspection Speed",
      metricValue: "5x Faster"
    },
    likesCount: 93,
    isLiked: false,
    isSaved: false,
    comments: [
      {
        id: "c4",
        author: "Sarah Lin",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
        handle: "sarah_lin",
        role: "Aerospace Student",
        text: "The edge inference speed is blazing! Are you using TensorRT on an onboard Jetson Nano?",
        timestamp: "5 hours ago"
      }
    ]
  },
  {
    id: "post-5",
    author: {
      id: "user-eco-fab",
      name: "Circular FabLab Collective",
      handle: "circular_fablab",
      role: "Additive Manufacturing Research Group",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&auto=format&fit=crop&q=80",
      verified: true
    },
    title: "Upcycling Ocean Plastics into Structural Geogrids for Soil Stabilization",
    category: "Clean Industry",
    sdgTarget: "SDG 9.5: Enhance Scientific Research & Industrial Capabilities",
    timestamp: "1 day ago",
    content: "Why manufacture virgin polymers for civil construction when post-consumer plastics can be reformed into tensile reinforcement grids? Our joint chemical-civil engineering project shreds discarded fishing nets and HDPE bottles into high-modulus interlocking mesh used to reinforce earthen embankments against mudslides. Circular economy meets resilient civil engineering. 🌊🧱🔄 #CircularEconomy #CivilEngineering #GreenMaterials #SustainableConstruction",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&auto=format&fit=crop&q=80",
    metrics: {
      metricLabel: "Plastic Diverted",
      metricValue: "1.4 Metric Tons"
    },
    likesCount: 154,
    isLiked: true,
    isSaved: false,
    comments: []
  }
];

export const SUGGESTED_INNOVATORS = [
  {
    id: "user-maya-lin",
    name: "Maya Lin",
    handle: "maya_smartgrids",
    role: "Microgrid & Smart Energy Lead",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80",
    specialty: "SDG 9.4 Sustainable Energy",
    followers: 1240,
    isFollowing: false
  },
  {
    id: "user-arvind-mehta",
    name: "Dr. Arvind Mehta",
    handle: "dr_mehta_iit",
    role: "Prof. of Resilient Materials",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80",
    specialty: "SDG 9.5 R&D Innovation",
    followers: 4890,
    isFollowing: true
  },
  {
    id: "user-fatima-iot",
    name: "Fatima Al-Mansoor",
    handle: "fatima_urban_ai",
    role: "Urban IoT Systems Fellow",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
    specialty: "SDG 9.1 Smart Cities",
    followers: 890,
    isFollowing: false
  },
  {
    id: "user-dev-kumar",
    name: "Dev Kumar",
    handle: "dev_kumar_robotics",
    role: "Autonomous Transport Builder",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80",
    specialty: "SDG 9.1 Transit Safety",
    followers: 670,
    isFollowing: false
  }
];

export const TRENDING_TOPICS = [
  { tag: "#ResilientInfrastructure", postsCount: "3.4k posts", category: "SDG 9.1", trending: true },
  { tag: "#BioConcrete", postsCount: "1.8k posts", category: "Materials", trending: true },
  { tag: "#Industry40", postsCount: "4.2k posts", category: "Automation", trending: false },
  { tag: "#CleanHydrogen", postsCount: "2.1k posts", category: "SDG 9.4", trending: true },
  { tag: "#SmartMicrogrids", postsCount: "980 posts", category: "Energy", trending: false },
  { tag: "#CivilRobotics", postsCount: "740 posts", category: "Robotics", trending: false }
];

export const INITIAL_NOTIFICATIONS = [
  {
    id: "notif-1",
    type: "like",
    user: "Priya Nair",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    content: "liked your post 'IoT Telemetry for Resilient Bridge Infrastructure'",
    timestamp: "12m ago",
    read: false,
    linkId: "post-1"
  },
  {
    id: "notif-2",
    type: "comment",
    user: "Dr. Arvind Mehta",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80",
    content: "commented: 'Outstanding design alignment with Target 9.1...'",
    timestamp: "45m ago",
    read: false,
    linkId: "post-1"
  },
  {
    id: "notif-3",
    type: "follow",
    user: "Tara GreenTech Innovations",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80",
    content: "started following your innovation research profile",
    timestamp: "2h ago",
    read: true,
    linkId: null
  },
  {
    id: "notif-4",
    type: "sdg",
    user: "ConnectHub SDG 9 Council",
    avatar: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=100&auto=format&fit=crop&q=80",
    content: "Your campus bridge telemetry project earned the 'Resilient Builder' SDG 9 Badge! (+250 Impact pts)",
    timestamp: "5h ago",
    read: true,
    linkId: "badge-resilient"
  },
  {
    id: "notif-5",
    type: "like",
    user: "Dev Kumar",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80",
    content: "endorsed your technical methodology for sustainable sensor arrays",
    timestamp: "1d ago",
    read: true,
    linkId: "post-1"
  }
];

export const SDG9_PILLARS = [
  {
    id: "pillar-1",
    target: "Target 9.1 & 9.a",
    title: "Resilient & Sustainable Infrastructure",
    description: "Develop quality, reliable, sustainable, and resilient infrastructure—including regional and transborder infrastructure—to support economic development and human well-being with affordable, equitable access.",
    icon: "Building2",
    color: "#0284c7",
    metrics: "Over 1 billion people currently lack reliable all-season road and transit access worldwide."
  },
  {
    id: "pillar-2",
    target: "Target 9.2 & 9.4",
    title: "Sustainable & Inclusive Industrialization",
    description: "Promote inclusive, green industrialization and significantly raise industry's share of employment. By 2030, upgrade infrastructure and retrofit industries to make them sustainable with increased resource-use efficiency.",
    icon: "Cpu",
    color: "#f35b25",
    metrics: "Retrofitting industrial processes with clean electricity could cut global industrial carbon by 40%."
  },
  {
    id: "pillar-3",
    target: "Target 9.5 & 9.b",
    title: "Foster Innovation & Scientific Research",
    description: "Enhance scientific research, upgrade technological capabilities of industrial sectors, substantially increase the number of R&D workers per million people, and support domestic technology development.",
    icon: "Sparkles",
    color: "#10b981",
    metrics: "Global R&D investment reached $2.5T, with student-led open innovation driving 35% of novel patents."
  }
];

export const PRESET_POST_IMAGES = [
  {
    title: "Smart Solar Grid Array",
    url: "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=900&auto=format&fit=crop&q=80",
    category: "Clean Tech"
  },
  {
    title: "Resilient High-Speed Transit",
    url: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=900&auto=format&fit=crop&q=80",
    category: "Sustainable Infrastructure"
  },
  {
    title: "Advanced Robotics & Automation",
    url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&auto=format&fit=crop&q=80",
    category: "Industry 4.0"
  },
  {
    title: "Sustainable Smart City Architecture",
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&auto=format&fit=crop&q=80",
    category: "Sustainable Infrastructure"
  },
  {
    title: "Eco Materials & Circular Lab",
    url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&auto=format&fit=crop&q=80",
    category: "R&D & Innovation"
  }
];
