import { Route, Routes } from "react-router-dom";
import Riverside from "./components/locations/Riverside.js";
import Home from "./components/home/Home.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fountain-service-Riverside" element={<Riverside />} />
      </Routes>
    </div>
  );
}

export default App;
