//import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailFilm from "./pages/DetailFilm";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedComponent from "./component/ProtectedComponent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/DetailFilm/:MovieID"
          element={
            <ProtectedComponent>
              <DetailFilm />
            </ProtectedComponent>
          }
        />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
