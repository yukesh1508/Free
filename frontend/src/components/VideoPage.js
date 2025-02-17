import React from "react";
import { useParams, useNavigate, Link  } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";


export const videos = [
  {
    id: 1,
    title: "Mastering React JS",
    description: "Kickstart your journey with React and build modern web apps.",
    link: "https://www.youtube.com/embed/CgkZ7MvWUAA?si=sUIq8ZVK6YlE588F",
  },
  {
    id: 2,
    title: "JavaScript for Beginners",
    description: "Learn Javascript in English for beginners",
    link: "https://www.youtube.com/embed/jS4aFq5-91M?si=9vy7DTThdlaxveps",
  },
  {
    id: 3,
    title: "CSS Techniques",
    description: "Learn advanced CSS techniques to create stunning designs.",
    link: "https://www.youtube.com/embed/1Rs2ND1ryYc?si=Ljgsdj3ldV7q2O4z",
  },
  {
    id: 4,
    title: "HTML For Beginners",
    description: "Master the Language of the Web – Learn HTML from Scratch!.",
    link: "https://www.youtube.com/embed/HD13eq_Pmp8?si=jlPyhCtzTikiECGL",
  },
  {
    id: 5,
    title: "Python Programming for Beginners: Master the Basics!",
    description: "Learn Python from scratch and unlock the power of one of the most versatile programming languages. ",
    link: "https://www.youtube.com/embed/xk4_1vDrzzo?si=iiY8idNA21xjKW7p",
  },
  {
    id: 6,
    title: "Java Programming for Beginners: From Fundamentals to Applications",
    description: "Master the basics of Java programming and start building powerful applications. This course covers essential concepts to kickstart your coding journey and develop real-world software.",
    link: "https://www.youtube.com/embed/jS4aFq5-91M?si=9vy7DTThdlaxveps",
  },
  {
    id: 7,
    title: "Bootstrap 5: Build Responsive Websites with Ease",
    description: "Learn to create beautiful, mobile-first websites using Bootstrap 5. This course helps you build fast, responsive web pages with ease. (Available in Tamil)",
    link: "https://www.youtube.com/embed/EMbaXrkBv5U?si=86WEzcePL3sTc_ux",
  },
  {
    id: 8,
    title: "JavaScript for Beginners: Unleash the Power of Web Development",
    description: "Master the fundamentals of JavaScript and start building dynamic, interactive websites. This course will teach you essential programming concepts to create responsive and engaging web experiences. (Available in Tamil)",
    link: "https://www.youtube.com/embed/poo0BXryffI?si=xhN1zNkVqVzPv23N",
  },
  {
    id: 9,
    title: "Bootstrap 5: Build Responsive Websites with Ease",
    description: "Learn to create beautiful, mobile-first websites using Bootstrap 5. This course helps you build fast, responsive web pages with ease.",
    link: "https://www.youtube.com/embed/-qfEOE4vtxE?si=Qt9fxOFFCrJtTFjZ",
  },
  {
    id: 10,
    title: "Frontend Development Tutorial IN Tamil",
    description: "Learn Frontend Development with JavaScript For Beginner with Project",
    link: "https://www.youtube.com/embed/7dSJubxFWv0?si=r0eHF8V9iWqJJSwK://www.youtube.com/embed/jS4aFq5-91M?si=9vy7DTThdlaxveps",
  },
  {
    id: 11,
    title: "Prompt Engineering : Crafting AI-Driven Solutions",
    description: "Learn the art of prompt engineering to unlock the full potential of AI tools like ChatGPT. This course will teach you how to design effective prompts, optimize AI outputs, and solve real-world problems with precision.Learn advanced CSS techniques to create stunning designs.",
    link: "https://www.youtube.com/embed/_ZvnD73m40o?si=MA4MqL-9QOAcUIAu",
  },
  {
    id: 12,
    title: "Python Programming for Beginners: Master the Basics!",
    description: "Learn Python from scratch and unlock the power of one of the most versatile programming languages.",
    link: "https://www.youtube.com/embed/m67-bOpOoPU?si=zyXrAO5Yz80Mvv9Z",
  },
  {
    id: 13,
    title: "C++ Programming: Build Strong Foundations in Coding",
    description: "Master C++, the language that powers modern applications, games, and systems. This course covers core concepts like OOP, data structures, and algorithms to kickstart your programming journey. ",
    link: "https://www.youtube.com/embed/MhYECGUzdA4?si=8tErZZ3QtVtdXmJu",
  },
  {
    id: 14,
    title: "TypeScript Essentials: Supercharge Your JavaScript Skills",
    description: "Learn TypeScript to write cleaner, scalable, and error-free code. This course will guide you through advanced typing, interfaces, and modern JavaScript practices for building robust applications.",
    link: "https://www.youtube.com/embed/d56mG7DezGs?si=WpHjI3atNk825IqU",
  },
  {
    id: 15,
    title: "CSS Full Course In Tamil",
    description: "Learn advanced CSS techniques to create stunning designs. (Available in Tamil)",
    link: "https://www.youtube.com/embed/l0BTo4VGVVs?si=ltoeuX6Bg9J4xNrs",
  },
  {
    id: 16,
    title: "HTML Basics: Build the Backbone of the Web",
    description: "Learn HTML, the foundation of all websites, and create well-structured, responsive web pages from scratch. This course is perfect for beginners to start their web development journey. (Available in Tamil)",
    link: "https://www.youtube.com/embed/3jkub2c0kLA?si=gwROFX4NYMNJxSOC",
  },
  {
    id: 17,
    title: "PHP for Beginners: Dynamic Web Development Made Easy",
    description: "Master PHP to build dynamic, data-driven websites and backend systems. This course covers everything from the basics to advanced concepts, empowering you to create powerful web applications. ",
    link: "https://www.youtube.com/embed/BUCiSSyIGGU?si=DNceCtnm25cLKq6P",
  },
  {
    id: 18,
    title: "SQL Mastery: Manage and Query Databases Like a Pro",
    description: "Learn SQL to efficiently manage, query, and analyze data in relational databases. This course is ideal for building a strong foundation in database management and data manipulation.",
    link: "https://www.youtube.com/embed/HXV3zeQKqGY?si=iMAyDoLamEs2PWjI",
  },
  {
    id: 19,
    title: "Python Beginners Projects",
    description: "Build projects with python for beginners ",
    link: "https://www.youtube.com/embed/pdy3nh1tn6I?si=ZMzbPbgKCGs59748",
  },
  {
    id: 20,
    title: "Web Development Coding Bootcamp. Build Full-Stack Projects.",
    description: "React.js Full Stack Development, HTML CSS JavaScript Node.js MongoDB",
    link: "https://www.youtube.com/embed/MDZC8VDZnV8?si=dofh72wrj0uHXp67",
  },
];

const VideoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const userId = "user-id-placeholder"; // Replace with the actual logged-in user's ID

  const video = videos.find((video) => video.id === parseInt(id));

  const handleAddCourse = async () => {
    try {
      const response = await axios.post("/api/courses/add", {
        userId: userId, // Replace with actual user ID
        courseId: id, // Course ID
      });

      if (response.status === 200) {
        alert("Course added successfully!");
      }
    } catch (error) {
      console.error("Error adding course:", error);
      alert("Failed to add the course. Please try again.");
    }
  };


  if (!video) {
    return (
      <div className="video-page d-flex align-items-center justify-content-center vh-100">
        <h2>Video not found!</h2>
      </div>
    );
  }

  return (
    <div className="video-page container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-8">
          <div className="video-container shadow-sm p-4 rounded bg-white">
            <h2 className="video-title text-center mb-4">{video.title}</h2>
            <iframe
              className="video-frame rounded"
              width="100%"
              height="500"
              src={video.link}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="video-description mt-3 text-secondary">{video.description}</p>
            <div className="d-flex justify-content-between align-items-center mt-4">
              <button
                className="btn btn-outline-primary"
                onClick={() => navigate("/")}
              >
                Back to Home
              </button>
              <Link to="/quizzes" className="btn btn-secondary">
                Go to Quizzes
              </Link>
              <Link to="/interview-questions" className="btn btn-secondary">
                Go to Interview Questions
              </Link>
              <button
                className="btn btn-primary"
                onClick={handleAddCourse} 
              >
                Add to My Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
