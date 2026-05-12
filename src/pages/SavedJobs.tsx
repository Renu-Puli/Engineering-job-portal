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

export default function SavedJobs() {
  const [savedJobs, setSavedJobs] = useState<Job[]>([]);
  const [appliedJobs, setAppliedJobs] = useState<Job[]>([]);
  const [popup, setPopup] = useState("");

  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const userKey = currentUser?.email || "";

  useEffect(() => {
    if (!userKey) return;

    const saved = localStorage.getItem(`savedJobs_${userKey}`);
    const applied = localStorage.getItem(`appliedJobs_${userKey}`);

    if (saved) setSavedJobs(JSON.parse(saved));
    if (applied) setAppliedJobs(JSON.parse(applied));
  }, [userKey]);

  useEffect(() => {
    if (popup) {
      const timer = setTimeout(() => setPopup(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [popup]);

  const handleRemove = (id: number) => {
    const updated = savedJobs.filter((job) => job.id !== id);
    setSavedJobs(updated);
    localStorage.setItem(`savedJobs_${userKey}`, JSON.stringify(updated));
  };

  const handleApply = (e: React.ChangeEvent<HTMLInputElement>, job: Job) => {
    if (!userKey) return;

    const file = e.target.files?.[0];
    if (!file) return;

    const appliedKey = `appliedJobs_${userKey}`;
    const existing: Job[] = JSON.parse(localStorage.getItem(appliedKey) || "[]");

    if (existing.some((j) => j.id === job.id)) {
      setPopup("⚠ Already Applied!");
      return;
    }

    const updated = [...existing, job];
    localStorage.setItem(appliedKey, JSON.stringify(updated));
    setAppliedJobs(updated);
    setPopup(`🎉 Applied with ${file.name}!`);
  };

  return (
    <div className="saved-container">
      <h2 className="shining-text" style={{ gridColumn: '1 / -1', marginBottom: '20px' }}>Saved Jobs</h2>

      {savedJobs.length === 0 ? (
        <p>No saved jobs yet.</p>
      ) : (
        savedJobs.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p><strong>{job.company}</strong></p>
            <p>{job.location}</p>
            <p>{job.salary}</p>

            <div className="btn-group" style={{ marginTop: '20px' }}>
              <button
                onClick={() => handleRemove(job.id)}
                className="save-btn"
                style={{ background: 'linear-gradient(45deg, #ff416c, #ff4b2b)' }}
              >
                Remove
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
        ))
      )}
      {popup && <div className="popup">{popup}</div>}
    </div>
  );
}