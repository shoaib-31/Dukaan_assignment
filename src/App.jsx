import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import PayoutsPage from "./Pages/PayoutsPage";
import { useState } from "react";

function App() {
  const [currentTab, setCurrentTab] = useState("home");
  return (
    <Router>
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/orders" element={<h1>Orders</h1>} />
        <Route path="/products" element={<h1>Products</h1>} />
        <Route path="/delivery" element={<h1>Delivery</h1>} />
        <Route path="/marketing" element={<h1>Marketing</h1>} />
        <Route path="/analytics" element={<h1>Analytics</h1>} />
        <Route path="/payouts" element={<PayoutsPage />} />
        <Route path="/discounts" element={<h1>Discounts</h1>} />
        <Route path="/audience" element={<h1>Audience</h1>} />
        <Route path="/apprearance" element={<h1>Appearance</h1>} />
        <Route path="/plugins" element={<h1>Plugins</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
