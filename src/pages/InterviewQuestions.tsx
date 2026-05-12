import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { interviewQuestions } from "../data/interviewQuestions";

export default function InterviewQuestions() {
  const { role } = useParams<{ role: string }>();
  const questions = role ? interviewQuestions[role] : [];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="content" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <h2 className="shining-text" style={{ margin: 0 }}>
          {role} Interview Preparation
        </h2>
        <Link to="/applied" className="save-btn" style={{ textDecoration: 'none' }}>
          Back to Applied Jobs
        </Link>
      </div>

      {!questions || questions.length === 0 ? (
        <div className="job-card" style={{ textAlign: 'center' }}>
          <p>No questions found for this role yet. Stay tuned!</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {questions.map((q, index) => (
            <div 
              key={index} 
              className={`job-card ${activeIndex === index ? 'active' : ''}`} 
              style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '15px' }}
              onClick={() => toggleAnswer(index)}
            >
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <span style={{ 
                  background: 'linear-gradient(45deg, #00c6ff, #0072ff)',
                  padding: '8px 15px',
                  borderRadius: '10px',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  minWidth: '45px',
                  textAlign: 'center',
                  color: 'white'
                }}>
                  {index + 1}
                </span>
                <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: '1.6', color: 'white', flex: 1 }}>
                  {q.question}
                </p>
                <span style={{ transition: '0.3s', transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  ▼
                </span>
              </div>
              
              {activeIndex === index && (
                <div style={{ 
                  paddingTop: '15px', 
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                  color: '#aaa',
                  lineHeight: '1.6',
                  animation: 'fadeIn 0.3s ease'
                }}>
                  <strong style={{ color: '#00c6ff' }}>Answer:</strong> {q.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
