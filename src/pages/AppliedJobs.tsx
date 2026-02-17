import { useEffect, useState } from "react";

export default function AppliedJobs() {
  const [appliedJobs, setAppliedJobs] = useState<any[]>([]);

  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const userKey = currentUser.email;

  useEffect(() => {
    if (!userKey) return;

    const applied = localStorage.getItem(`appliedJobs_${userKey}`);

    if (applied) {
      setAppliedJobs(JSON.parse(applied));
    }
  }, [userKey]);

  return (
    <div className="saved-container">
      <h2>Applied Jobs</h2>

      {appliedJobs.length === 0 ? (
        <p>No applied jobs yet.</p>
      ) : (
        appliedJobs.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <p>{job.salary}</p>
          </div>
        ))
      )}
    </div>
  );
}