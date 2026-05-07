import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tracks from "./pages/Tracks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracks" element={<Tracks />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;