import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-dark-200 text-white font-sans selection:bg-purple selection:text-white flex flex-col">
      <NavBar />

      {/* Main Routed Pages */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      {/* Footer stays visible on all routes */}
      <Footer />
    </div>
  );
}
