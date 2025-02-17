import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const quizzes = [
  { id: 1, title: "JavaScript Quiz", description: "Test your JavaScript skills!" },
  { id: 2, title: "React Quiz", description: "Challenge yourself with React questions." },
  { id: 3, title: "CSS Quiz", description: "Evaluate your CSS expertise." },
  { id: 4, title: "HTML Quiz", description: "Brush up on your HTML knowledge." },
  {
    id: 5,
    title: "Flexbox Froggy",
    description: "Learn Flexbox with an interactive game!",
    url: "https://flexboxfroggy.com/",
  },
];

const Quizzes = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Quizzes</h2>
      <div className="row">
        {quizzes.map((quiz) => (
          <div className="col-md-6 col-lg-4 mb-4" key={quiz.id}>
            <div className="card shadow-sm p-3 h-100">
              <div className="card-body text-center">
                <h5 className="card-title">{quiz.title}</h5>
                <p className="card-text text-secondary">{quiz.description}</p>
                {quiz.url ? (
                  <a
                    href={quiz.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success"
                  >
                    Visit
                  </a>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => alert("Quiz Coming Soon!")}
                  >
                    Start Quiz
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quizzes;
