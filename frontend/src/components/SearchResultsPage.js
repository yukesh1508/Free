import React from "react";
import { useLocation, Link } from "react-router-dom";
import { videos } from "./VideoPage"; // Import videos from VideoPage
import { quizzes } from "./Quizzes"; // Import quizzes
import "./SearchResultsPage.css"; // Import your CSS file for styling

const SearchResultsPage = () => {
  const query = new URLSearchParams(useLocation().search).get("query");

  // Combine videos and quizzes
  const combinedResults = [
    ...videos.map((video) => ({ ...video, type: "video" })),
    ...quizzes.map((quiz) => ({ ...quiz, type: "quiz" })),
  ];

  // Filter combined results based on the search query
  const filteredResults = combinedResults.filter((item) =>
    item.title.toLowerCase().includes(query?.toLowerCase() || "")
  );

  return (
    <div className="container">
      <h2 className="search-results-title">
        Search Results for "{query}"
      </h2>
      {filteredResults.length > 0 ? (
        <ul className="video-list">
          {filteredResults.map((item) => (
            <li className="video-item" key={`${item.type}-${item.id}`}>
              {item.type === "video" ? (
                <>
                  <iframe
                    src={item.link}
                    title={item.title}
                    className="thumbnail"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="video-content">
                    <Link to={`/video/${item.id}`} className="video-title">
                      {item.title}
                    </Link>
                    <p className="video-description">{item.description}</p>
                    <Link to={`/video/${item.id}`} className="watch-button">
                      Watch Now
                    </Link>
                  </div>
                </>
              ) : (
                <div className="quiz-content">
                  <h5 className="video-title">{item.title}</h5>
                  <p className="video-description">{item.description}</p>
                  {item.url ? (
                    <a
                      href={item.url}
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
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found for "{query}".</p>
      )}
    </div>
  );
};

export default SearchResultsPage;
