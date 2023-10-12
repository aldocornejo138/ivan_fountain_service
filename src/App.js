import { Route, Routes } from "react-router-dom";
import Riverside from "./components/locations/Riverside.js";
import Corona from "./components/locations/Corona.js";
import Home from "./components/home/Home.js";
import ScrollToTop from "./components/constants/ScrollToTop.js";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fountain-service-Riverside" element={<Riverside />} />
        <Route path="/fountain-service-Corona" element={<Corona />} />
      </Routes>
    </div>
  );
}

export default App;
