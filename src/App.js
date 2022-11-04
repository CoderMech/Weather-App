import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Getweather } from "./components/Getweather";
import { Converter } from "./components/Converter";
import { Home } from "./components/Home";
import { Logo } from "./components/Logo";

function App(props) {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Logo />} />
        <Route path="/getweather" element={<Getweather />} />
        <Route path="/converter" element={<Converter />} />
      </Routes>
    </div>
  );
}

export default App;
