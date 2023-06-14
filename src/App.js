import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComingSoon from "./pages/ComingSoon";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ComingSoon />} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
