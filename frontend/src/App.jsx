// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Import the Home component
import RegestrationForm from './components/RegestrationForm'; // Import the Home component

const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<RegestrationForm/>} /> {/* Home route */}
          <Route path="/home" element={<Home />} /> {/* Home route */}
          {/* You can add more routes here for other pages */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
