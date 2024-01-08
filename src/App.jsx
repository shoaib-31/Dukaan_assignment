import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Payouts from "./Pages/Payouts";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Payouts />} />
      </Routes>
    </Router>
  );
}

export default App;
