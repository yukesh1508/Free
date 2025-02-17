import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const questions = [
  { id: 1, question: "What are React hooks?", category: "React" },
  { id: 2, question: "Explain closures in JavaScript.", category: "JavaScript" },
  { id: 3, question: "What is the difference between block and inline elements?", category: "HTML/CSS" },
  { id: 4, question: "Explain the concept of promises in JavaScript.", category: "JavaScript" },
];

const InterviewQuestions = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Interview Questions</h2>
      <ul className="list-group">
        {questions.map((q) => (
          <li className="list-group-item" key={q.id}>
            <strong>{q.category}:</strong> {q.question}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InterviewQuestions;
