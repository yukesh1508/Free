import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";


const videos = [
  {
    id: 1,
    title: "React JS ",
    image: "/images/react.jpg",
  },
  {
    id: 2,
    title: "JavaScript In English",
    image: "/images/js.jpg",

  },
  {
    id: 3,
    title: "CSS ",
    image: "/images/css.jpg",
    
  },
  {
    id: 4,
    title: "HTML",
    image: "/images/html.jpg",
    
  },
  {
    id: 5,
    title: "Python for beginners ",
    image: "/images/python.jpg",
  },
  {
    id: 6,
    title: "Java programming",
    image: "/images/java.jpg",

  },
  {
    id: 7,
    title: "Bootstrap In Tamil",
    image: "/images/bp.jpg",
    
  },
  {
    id: 8,
    title: "JavaScript In Tamil",
    image: "/images/js.jpg",
    
  },
  {
    id: 9,
    title: "Bootstrap 5 In English",
    image: "/images/bp.jpg",
  },
  {
    id: 10,
    title: "Frontend Development Tutorial In Tamil",
    image: "/images/frontend.jpg",

  },
  {
    id: 11,
    title: "Prompt Engineering For Beginners ",
    image: "/images/prompt.jpg",
    
  },
  {
    id: 12,
    title: "Python In Tamil",
    image: "/images/python.jpg",
    
  },
  {
    id: 13,
    title: "C++",
    image: "/images/c++.jpg",
  },
  {
    id: 14,
    title: "TypeScript",
    image: "/images/ts.jpg",

  },
  {
    id: 15,
    title: "CSS In Tamil",
    image: "/images/css.jpg",
    
  },
  {
    id: 16,
    title: "HTML In Tamil",
    image: "/images/html.jpg",
    
  },
  {
    id: 17,
    title: "PHP",
    image: "/images/php.jpg",
  },
  {
    id: 18,
    title: "SQL For Beginners",
    image: "/images/sql.jpg",

  },
  {
    id: 19,
    title: "Python Project for Beginners",
    image: "/images/python.jpg",
    
  },
  {
    id: 20,
    title: "Build 4 MERN Stack Projects",
    image: "/images/mern.jpg",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/video/${id}`);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Welcome to the Video Library!</h2>
      <div className="row">
        {videos.map((video) => (
          <div className="col-md-3" key={video.id}>
            <div
              className="card"
              onClick={() => handleCardClick(video.id)}
              style={{ cursor: "pointer" }}
            >
              {/* Card Image */}
              <img
                src={video.image}
                className="card-img-top"
                alt={video.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              {/* Card Body */}
              <div className="card-body text-center">
                <h5 className="card-title">{video.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
