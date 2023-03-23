import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ReactPopUp from "./components/PopUpTest";

import VideoPlayer from "./components/VideoPlayer";

import NotFound from "./components/NotFound";
import "./App.css";

const App = () => (
  <div className="app-background-container">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<ReactPopUp />} />
        <Route exact path="/video" element={<VideoPlayer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
