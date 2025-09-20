import LandingPage from "./components/LandingPage";
import CareerPage from "./components/CareerPage";
import JobApplicationPage from "./components/JobApplicationPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticleDetail from "./components/ArticleDetail";
import AboutPage from "./components/AboutPage";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/careers" element={<CareerPage />} />
      <Route path="/article/:id" element={<ArticleDetail />} />
      <Route path="/apply/:job_id" element={<JobApplicationPage />} />
      <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
