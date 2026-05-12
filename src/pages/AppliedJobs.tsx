import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AppliedJobs() {
  const [appliedJobs, setAppliedJobs] = useState<any[]>([]);

  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const userKey = currentUser?.email || "";

  useEffect(() => {
    console.log("AppliedJobs Page - UserKey:", userKey);
    if (!userKey) return;

    const applied = localStorage.getItem(`appliedJobs_${userKey}`);
    if (applied) {
      setAppliedJobs(JSON.parse(applied));
    }
  }, [userKey]);

  return (
    <div className="saved-container">
      <h2 className="shining-text" style={{ gridColumn: '1 / -1', marginBottom: '20px' }}>Applied Jobs & ATS Tracking</h2>

      {appliedJobs.length === 0 ? (
        <p>No applied jobs yet.</p>
      ) : (
        appliedJobs.map((job) => (
          <div key={job.id} className="job-card" style={{ borderLeft: '5px solid #00c6ff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3>{job.title}</h3>
                <p><strong>{job.company}</strong></p>
                <p>{job.location}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ 
                  background: 'rgba(0, 198, 255, 0.1)', 
                  padding: '10px', 
                  borderRadius: '12px',
                  border: '1px solid #00c6ff'
                }}>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: '#00c6ff' }}>ATS Match</p>
                  <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold' }}>{job.atsScore || '92'}%</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '20px' }}>
              <p style={{ margin: '0 0 10px 0', fontSize: '0.9rem', color: '#888' }}>Recommended Skills for Resume:</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {(job.skills || ["Problem Solving", "Communication"]).map((skill: string) => (
                  <span key={skill} style={{ 
                    background: 'rgba(255,255,255,0.05)', 
                    padding: '5px 12px', 
                    borderRadius: '20px', 
                    fontSize: '0.8rem',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <Link 
              to={`/prep/${job.role}`} 
              className="save-btn" 
              style={{ display: 'block', textAlign: 'center', marginTop: '20px', textDecoration: 'none' }}
            >
              Interview Prep
            </Link>
          </div>
        ))
      )}
    </div>
  );
}