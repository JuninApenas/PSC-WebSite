import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Principal from "./pages/Principal";
import Horarios from "./pages/Horarios";
import Historia from "./pages/Historia";
import Transparencia from "./pages/Transparencia";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Principal />} />
          <Route path="Horarios" element={<Horarios />} />
          <Route path="Historia" element={<Historia />} />
          <Route path="Transparencia" element={<Transparencia />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
