import LandingPage from "./components/LandingPage";
import CareerPage from "./components/CareerPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/careers" element={<CareerPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
