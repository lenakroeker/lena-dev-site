import "./App.css";
import styled from "styled-components";

import Home from "./pages/Home.jsx";
import Header from "./Components/Header.jsx";
import Bg from "./Components/Background.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Spiff from "./pages/Spiff.jsx";
import GreyRoom from "./pages/GreyRoom.jsx";
import LKsite from "./pages/LKSite.jsx";

import Matchbox from "./pages/Matchbox.jsx";
import Sweven from "./pages/Sweven.jsx";

function App() {
  return (
    <Router>
      <Bg />

      <Routes>
        <Route>
          <Route exact path="/" element={<Home />} />
        </Route>
        <Route>
          <Route exact path="/spiff" element={<Spiff />} />
        </Route>
        <Route>
          <Route exact path="/greyroomshop" element={<GreyRoom />} />
        </Route>
        <Route>
          <Route exact path="/matchbox" element={<Matchbox />} />
        </Route>
        <Route>
          <Route exact path="/lkportfolio" element={<LKsite />} />
        </Route>
        <Route>
          <Route exact path="/sweven" element={<Sweven />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
