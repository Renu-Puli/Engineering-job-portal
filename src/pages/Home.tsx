import { useState, useEffect } from "react";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  role: string;
  description: string;
  skills: string[];
  atsScore?: number;
};

const roles = [
  "All",
  "Frontend",
  "Backend",
  "AI",
  "DevOps",
  "Data Science",
  "Full Stack",
  "Cyber Security",
];

const roleSkills: Record<string, string[]> = {
  Frontend: ["React", "TypeScript", "Tailwind", "Next.js", "Redux"],
  Backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Redis"],
  AI: ["Python", "PyTorch", "TensorFlow", "Scikit-Learn", "NLP"],
  DevOps: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"],
  "Data Science": ["Python", "R", "Pandas", "SQL", "Tableau"],
  "Full Stack": ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
  "Cyber Security": ["Ethical Hacking", "Network Security", "SIEM", "Cryptography"],
};

const jobs: Job[] = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Google",
    location: "Bangalore, India",
    salary: "1.2 Lakh/mo",
    role: "Full Stack",
    description: "Join the Google Cloud team to build scalable services using Go and Java. Experience with distributed systems and data structures is preferred.",
    skills: ["Go", "Java", "Kubernetes", "Cloud Computing", "Algorithms"]
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Meta",
    location: "Remote (India)",
    salary: "35 LPA",
    role: "Frontend",
    description: "Develop immersive user experiences for Facebook and Instagram using React and Relay. Focus on performance optimization and accessibility.",
    skills: ["React", "Relay", "GraphQL", "Performance", "Web Accessibility"]
  },
  {
    id: 3,
    title: "AI Research Engineer",
    company: "OpenAI",
    location: "San Francisco (Remote)",
    salary: "60 LPA",
    role: "AI",
    description: "Collaborate on training large-scale language models. Focus on RLHF, fine-tuning, and optimizing inference for production environments.",
    skills: ["PyTorch", "Transformers", "NLP", "Python", "Deep Learning"]
  },
  {
    id: 4,
    title: "Data Science Internship",
    company: "Amazon",
    location: "Hyderabad, India",
    salary: "80,000/mo",
    role: "Data Science",
    description: "Apply machine learning models to improve Amazon's delivery logistics. Analyze large datasets using AWS SageMaker and Python.",
    skills: ["Python", "SQL", "Machine Learning", "AWS SageMaker", "Statistics"]
  },
  {
    id: 5,
    title: "Backend Developer (Node.js)",
    company: "Netflix",
    location: "Mumbai, India",
    salary: "45 LPA",
    role: "Backend",
    description: "Build the robust APIs that power Netflix's content delivery. Master high-concurrency systems and microservices architecture.",
    skills: ["Node.js", "Express", "Microservices", "Kafka", "PostgreSQL"]
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "Microsoft",
    location: "Pune, India",
    salary: "28 LPA",
    role: "DevOps",
    description: "Manage Azure infrastructure and automate CI/CD pipelines. Work with Kubernetes, Docker, and GitHub Actions.",
    skills: ["Azure", "Kubernetes", "Docker", "CI/CD", "Terraform"]
  },
  {
    id: 7,
    title: "Cyber Security Analyst",
    company: "TCS",
    location: "Chennai, India",
    salary: "12 LPA",
    role: "Cyber Security",
    description: "Monitor network traffic for security breaches. Perform vulnerability assessments and implement security protocols.",
    skills: ["Networking", "Firewalls", "SIEM", "Penetration Testing", "Security Audit"]
  },
  {
    id: 8,
    title: "MERN Stack Developer",
    company: "Swiggy",
    location: "Bangalore, India",
    salary: "24 LPA",
    role: "Full Stack",
    description: "Work on Swiggy's core ordering platform. Build seamless end-to-end features using React, Node.js, and MongoDB.",
    skills: ["React", "Node.js", "MongoDB", "Express", "Redux"]
  },
  {
    id: 9,
    title: "Machine Learning Intern",
    company: "NVIDIA",
    location: "Pune, India",
    salary: "1 Lakh/mo",
    role: "AI",
    description: "Optimize deep learning models for NVIDIA GPUs. Explore CUDA programming and model quantization techniques.",
    skills: ["C++", "CUDA", "Deep Learning", "TensorRT", "Computer Vision"]
  },
  {
    id: 10,
    title: "Backend Engineer",
    company: "Zomato",
    location: "Gurgaon, India",
    salary: "30 LPA",
    role: "Backend",
    description: "Develop high-performance systems for real-time order tracking and payments. Experience with Go or Python is a plus.",
    skills: ["Go", "Python", "Redis", "Kafka", "PostgreSQL"]
  },
  {
    id: 11,
    title: "iOS Developer",
    company: "Apple",
    location: "Hyderabad, India",
    salary: "38 LPA",
    role: "Frontend",
    description: "Design and build applications for the iOS platform using Swift and SwiftUI. Focus on user experience and system integration.",
    skills: ["Swift", "SwiftUI", "Core Data", "Combine", "XCode"]
  },
  {
    id: 12,
    title: "Cloud Architect",
    company: "IBM",
    location: "Chennai, India",
    salary: "32 LPA",
    role: "DevOps",
    description: "Lead the design of cloud-native architectures for enterprise clients. Focus on hybrid cloud solutions and security.",
    skills: ["IBM Cloud", "RedHat OpenShift", "Docker", "Security", "Architecture"]
  },
  {
    id: 13,
    title: "Robotics Intern",
    company: "Tesla",
    location: "Remote",
    salary: "1.5 Lakh/mo",
    role: "AI",
    description: "Work on computer vision algorithms for humanoid robots. Focus on real-time object detection and path planning.",
    skills: ["Python", "C++", "PyTorch", "ROS", "Computer Vision"]
  },
  {
    id: 14,
    title: "Full Stack Developer",
    company: "PhonePe",
    location: "Bangalore, India",
    salary: "26 LPA",
    role: "Full Stack",
    description: "Scale India's largest payment platform. Build robust frontend and backend services handling millions of transactions.",
    skills: ["React", "Java", "Spring Boot", "MySQL", "AWS"]
  },
  {
    id: 15,
    title: "Security Engineer",
    company: "CrowdStrike",
    location: "Pune, India",
    salary: "40 LPA",
    role: "Cyber Security",
    description: "Develop advanced threat detection systems. Analyze malware and build defensive mechanisms against zero-day exploits.",
    skills: ["Python", "Kernel Programming", "Reverse Engineering", "Malware Analysis"]
  },
  {
    id: 16,
    title: "Blockchain Intern",
    company: "Polygon",
    location: "Remote",
    salary: "1.2 Lakh/mo",
    role: "Backend",
    description: "Develop smart contracts and optimize Layer 2 scaling solutions. Deep dive into Ethereum and Zero-Knowledge proofs.",
    skills: ["Solidity", "Rust", "Ethereum", "ZK-Proofs", "Web3.js"]
  },
  {
    id: 17,
    title: "UX Engineer",
    company: "Adobe",
    location: "Noida, India",
    salary: "22 LPA",
    role: "Frontend",
    description: "Bridge the gap between design and engineering. Build high-fidelity components for Creative Cloud applications.",
    skills: ["TypeScript", "CSS3", "SVG Animations", "React", "D3.js"]
  },
  {
    id: 18,
    title: "Site Reliability Engineer",
    company: "LinkedIn",
    location: "Bangalore, India",
    salary: "34 LPA",
    role: "DevOps",
    description: "Ensure the reliability and performance of LinkedIn's core infrastructure. Master observability and incident response.",
    skills: ["Python", "Go", "Prometheus", "Grafana", "Linux Systems"]
  },
  {
    id: 19,
    title: "Deep Learning Engineer",
    company: "Samsung Research",
    location: "Bangalore, India",
    salary: "28 LPA",
    role: "AI",
    description: "Research and implement on-device AI models for mobile devices. Focus on model compression and efficient inference.",
    skills: ["TensorFlow Lite", "On-device AI", "Quantization", "NLP"]
  },
  {
    id: 20,
    title: "Backend Intern",
    company: "Uber",
    location: "Hyderabad, India",
    salary: "90,000/mo",
    role: "Backend",
    description: "Improve the performance of Uber's dispatch services. Work with distributed systems and high-throughput data pipelines.",
    skills: ["Go", "Java", "Apache Flink", "Cassandra", "Redis"]
  },
  {
    id: 21,
    title: "Data Analyst",
    company: "Flipkart",
    location: "Bangalore, India",
    salary: "18 LPA",
    role: "Data Science",
    description: "Drive business decisions using data-driven insights. Focus on supply chain optimization and consumer behavior analysis.",
    skills: ["SQL", "Python", "Excel", "PowerBI", "Statistics"]
  },
  {
    id: 22,
    title: "Software Engineer",
    company: "SpaceX",
    location: "Remote",
    salary: "50 LPA",
    role: "Full Stack",
    description: "Build flight software and mission control systems. High-reliability code for mission-critical aerospace applications.",
    skills: ["C++", "Python", "JavaScript", "React", "Embedded Systems"]
  },
  {
    id: 23,
    title: "React Native Developer",
    company: "Razorpay",
    location: "Bangalore, India",
    salary: "20 LPA",
    role: "Frontend",
    description: "Develop seamless mobile payment experiences for millions of users. Focus on cross-platform performance.",
    skills: ["React Native", "TypeScript", "Mobile Security", "Animations"]
  },
  {
    id: 24,
    title: "Database Administrator",
    company: "Oracle",
    location: "Hyderabad, India",
    salary: "25 LPA",
    role: "Backend",
    description: "Manage and optimize large-scale Oracle databases. Focus on high availability, backup, and performance tuning.",
    skills: ["Oracle SQL", "PL/SQL", "Database Tuning", "Backup/Recovery"]
  },
  {
    id: 25,
    title: "Network Security Intern",
    company: "Cisco",
    location: "Bangalore, India",
    salary: "70,000/mo",
    role: "Cyber Security",
    description: "Help secure global enterprise networks. Assist in troubleshooting and configuring security appliances.",
    skills: ["Cisco IOS", "CCNA", "Firewalls", "VPN", "Network Protocols"]
  }
];

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState<string>("All");

  // ✅ FIX: Explicitly define type as Job[]
  const [_savedJobs, setSavedJobs] = useState<Job[]>([]);
  const [_appliedJobs, setAppliedJobs] = useState<Job[]>([]);

  const [popup, setPopup] = useState<string>("");

  // Safe access to localStorage (important for production build)
  const currentUser =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("currentUser") || "{}")
      : {};


  useEffect(() => {
    if (!userKey) return;

    const saved = localStorage.getItem(`savedJobs_${userKey}`);
    const applied = localStorage.getItem(`appliedJobs_${userKey}`);

    if (saved) setSavedJobs(JSON.parse(saved));
    if (applied) setAppliedJobs(JSON.parse(applied));
  }, [userKey]);

  const filteredJobs = jobs.filter((job) => {
    const matchSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase());

    const matchRole =
      selectedRole === "All" || job.role === selectedRole;

    return matchSearch && matchRole;
  });

  const handleSave = (job: Job) => {
    if (!userKey) {
      console.error("No userKey found during save");
      return;
    }

    const savedKey = `savedJobs_${userKey}`;
    const existing: Job[] = JSON.parse(localStorage.getItem(savedKey) || "[]");

    if (existing.some((j) => j.id === job.id)) {
      setPopup("⚠ Already Saved!");
      return;
    }

    const updated = [...existing, job];
    localStorage.setItem(savedKey, JSON.stringify(updated));
    setSavedJobs(updated);
    setPopup("✅ Job Saved!");
    console.log("Job saved successfully:", job.title);
  };

  const handleApply = (e: React.ChangeEvent<HTMLInputElement>, job: Job) => {
    if (!userKey) {
      console.error("No userKey found during apply");
      return;
    }

    const file = e.target.files?.[0];
    if (!file) return;

    const appliedKey = `appliedJobs_${userKey}`;
    const existing: Job[] = JSON.parse(localStorage.getItem(appliedKey) || "[]");

    if (existing.some((j) => j.id === job.id)) {
      setPopup("⚠ Already Applied!");
      return;
    }

    // Simulate ATS Score (70-98%)
    const atsScore = Math.floor(Math.random() * (98 - 70 + 1)) + 70;
    const jobWithScore = { ...job, atsScore };

    const updated = [...existing, jobWithScore];
    localStorage.setItem(appliedKey, JSON.stringify(updated));
    setAppliedJobs(updated);
    setPopup(`🎉 Applied with ${file.name}! ATS Score: ${atsScore}%`);
    console.log("Applied successfully to:", job.title, "with score:", atsScore);
  };

  useEffect(() => {
    if (popup) {
      const timer = setTimeout(() => setPopup(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [popup]);

  return (
    <div className="layout">
      <div className="sidebar">
        <h2>Filter by Role</h2>
        {roles.map((role) => (
          <button
            key={role}
            className={selectedRole === role ? "active" : ""}
            onClick={() => setSelectedRole(role)}
          >
            {role}
          </button>
        ))}
      </div>

      <div className="content">
        <input
          className="search"
          placeholder="Search by title or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="job-grid">
          {filteredJobs.map((job) => (
            <div key={job.id} className="job-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3>{job.title}</h3>
                <p style={{ color: '#00c6ff', fontWeight: 'bold' }}>{job.company}</p>
                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{job.location} | {job.salary}</p>
              </div>
              <span className="role-tag">{job.role}</span>
            </div>

            <p style={{ 
              marginTop: '15px', 
              fontSize: '0.9rem', 
              lineHeight: '1.5',
              color: 'rgba(255,255,255,0.7)' 
            }}>
              {job.description}
            </p>

            <div style={{ marginTop: '15px' }}>
              <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: '8px' }}>Skills needed for Resume:</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {job.skills.map(skill => (
                  <span key={skill} style={{ 
                    fontSize: '0.75rem', 
                    background: 'rgba(255,255,255,0.05)', 
                    padding: '4px 10px', 
                    borderRadius: '15px',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="btn-group" style={{ marginTop: '20px' }}>
              <button
                onClick={() => handleSave(job)}
                className={`save-btn ${savedJobs.some((sj) => sj.id === job.id) ? "disabled" : ""}`}
                disabled={savedJobs.some((sj) => sj.id === job.id)}
              >
                {savedJobs.some((sj) => sj.id === job.id) ? "Saved" : "Save"}
              </button>

              <label className={`apply-btn ${appliedJobs.some(aj => aj.id === job.id) ? 'disabled' : ''}`}>
                {appliedJobs.some(aj => aj.id === job.id) ? "Applied" : "Apply"}
                {!appliedJobs.some(aj => aj.id === job.id) && (
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    hidden
                    onChange={(e) => handleApply(e, job)}
                  />
                )}
              </label>
            </div>
          </div>
          ))}
        </div>
      </div>

      {popup && <div className="popup">{popup}</div>}
    </div>
  );
}
