import { useState, useEffect } from "react";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  role: string;
  description: string;
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

const jobs: Job[] = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  title: `Software Engineer ${i + 1}`,
  company: ["Google", "Amazon", "Infosys", "TCS", "Microsoft"][i % 5],
  location: ["Hyderabad", "Bangalore", "Chennai", "Pune"][i % 4],
  salary: `${6 + i} LPA`,
  role: roles[(i % (roles.length - 1)) + 1],
  description:
    "Work on scalable enterprise applications and modern cloud-based systems.",
}));

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");
  const [savedJobs, setSavedJobs] = useState<Job[]>([]);
  const [appliedJobs, setAppliedJobs] = useState<Job[]>([]);
  const [popup, setPopup] = useState("");

  // ✅ Get user safely INSIDE component
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const userKey: string = currentUser?.email || "";

  // ✅ Load user specific data
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
    if (!userKey) return;

    const savedKey = `savedJobs_${userKey}`;
    const existing: Job[] = JSON.parse(
      localStorage.getItem(savedKey) || "[]"
    );

    if (existing.some((j) => j.id === job.id)) {
      setPopup("⚠ Already Saved!");
      return;
    }

    const updated = [...existing, job];
    localStorage.setItem(savedKey, JSON.stringify(updated));
    setSavedJobs(updated);
    setPopup("✅ Job Saved!");
  };

  const handleApply = (job: Job) => {
    if (!userKey) return;

    const appliedKey = `appliedJobs_${userKey}`;
    const existing: Job[] = JSON.parse(
      localStorage.getItem(appliedKey) || "[]"
    );

    if (existing.some((j) => j.id === job.id)) {
      setPopup("⚠ Already Applied!");
      return;
    }

    const updated = [...existing, job];
    localStorage.setItem(appliedKey, JSON.stringify(updated));
    setAppliedJobs(updated);
    setPopup("🎉 Applied Successfully!");
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
              <h3>{job.title}</h3>
              <p><strong>{job.company}</strong></p>
              <p>{job.location}</p>
              <p>{job.salary}</p>
              <p>{job.description}</p>

              <div className="btn-group">
                <button
                  onClick={() => handleSave(job)}
                  className="save-btn"
                >
                  Save
                </button>

                <label className="apply-btn">
                  Apply
                  <input
                    type="file"
                    hidden
                    onChange={() => handleApply(job)}
                  />
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