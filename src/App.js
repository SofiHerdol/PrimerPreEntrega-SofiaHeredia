import './App.css';
import { Routes, Route } from "react-router-dom";
import Rings from "./pages/Rings";
import Necklaces from "./pages/Necklaces";
import Earrings from "./pages/Earrings";
import Layout from "./pages/Layout";
import CustomPieces from "./pages/CustomPieces";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='rings' element={<Rings />} />
          <Route path='necklaces' element={<Necklaces />} />
          <Route path='earrings' element={<Earrings />} />
          <Route path='custom-pieces' element={<CustomPieces />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
