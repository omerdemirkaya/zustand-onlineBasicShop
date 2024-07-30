import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Siparisler from './components/Siparisler';
import Home from './pages/Home'; // Import other components/pages as needed

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/siparisler" element={<Siparisler />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
