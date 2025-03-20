import ArticleDetail from "./components/ArticleDetail";
import ArticlesList from "./components/ArticlesList";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
