import './App.scss';
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage";
import ShowJoke from "./components/show_joke";

const App = () => {
  return (
    
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/:id" element={<ShowJoke />} />
      </Routes>

  );
}

export default App;
