import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Headers/Header";
import Footer from "./components/Footer/Footer";
import "./Styles/pages.css";
import { useState } from "react";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";
import ChatbotComponents from "./components/Chatbot/ChatbotComponents";
import Admission from "./mainpagess/Admission";
import NotFound from "./mainpagess/NotFound";
import Courses from "./mainpagess/Courses";
import About from "./mainpagess/About";
import Contact from "./mainpagess/Contact";
import Home from "./mainpagess/Home";



const App =()=> {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Kunal Vilas Patil"
          studentPhotoUrl="\image\kunal.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      
      </div>
    <Router>
      <div className="main-layout">
        <Header />
        <div className="content">
          <Routes>
           <Route path="/" element={<Home />} /> 
             <Route path="/contact" element={< Contact />} /> 
            <Route path="/about" element={<About/>} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/admissions" element={<Admission />} />
             <Route path="*" element={<NotFound/>} />
          </Routes>
        </div>
        <Footer />
      
      </div>
    </Router>
    <ChatbotComponents/>
    </>
  );
}
export default App;