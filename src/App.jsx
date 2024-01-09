import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import PayoutsPage from "./Pages/PayoutsPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PayoutsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
