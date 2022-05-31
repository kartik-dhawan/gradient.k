import HomePage from "./Components/HomePage";
import LoginPage from "./Components/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Browse from "./Components/Browse";
import Board from "./Components/Board";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
