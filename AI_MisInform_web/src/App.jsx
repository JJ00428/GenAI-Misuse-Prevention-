import { Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound.jsx";
import { Awareness } from "./pages/Awareness.jsx";
import { Home } from "./pages/Home.jsx";
import { Detection } from "./pages/Detection.jsx";
import { Prevention } from "./pages/Prevention.jsx";
import { Navbar } from "./components/Navbar.jsx"; 

function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Awareness" element={<Awareness />} />
        <Route path="/Prevention" element={<Prevention />} />
        <Route path="/Detection" element={<Detection />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
