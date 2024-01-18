import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DatasetDetail from './components/DatasetDetail';
import DatasetSetup from './components/DatasetSetup';
import TagDetail from './components/TagDetail';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <div className="page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/datasets/:dataset" element={<DatasetDetail />} />
        <Route path="/datasets/:dataset/setup" element={<DatasetSetup/>} />
        <Route path="/datasets/:dataset/tags/:tag" element={<TagDetail />} />
      </Routes>
      </div>
    </Router>

  );
}

export default App;
