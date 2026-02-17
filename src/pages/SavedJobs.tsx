import { useState, useEffect } from "react";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
};

export default function SavedJobs() {
  const [savedJobs, setSavedJobs] = useState<Job[]>([]);

  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const userKey = currentUser?.email || "";

  useEffect(() => {
    if (!userKey) return;

    const saved = localStorage.getItem(`savedJobs_${userKey}`);
    if (saved) setSavedJobs(JSON.parse(saved));
  }, [userKey]);

  const handleRemove = (id: number) => {
    const updated = savedJobs.filter((job) => job.id !== id);
    setSavedJobs(updated);
    localStorage.setItem(
      `savedJobs_${userKey}`,
      JSON.stringify(updated)
    );
  };

  return (
    <div className="saved-container">
      <h2>Saved Jobs</h2>

      {savedJobs.length === 0 ? (
        <p>No saved jobs yet.</p>
      ) : (
        savedJobs.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <p>{job.salary}</p>

            <button
              onClick={() => handleRemove(job.id)}
              className="save-btn"
              style={{ marginTop: "10px" }}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}