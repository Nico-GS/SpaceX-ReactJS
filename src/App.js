import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import ViewCapsules from "./components/capsules/ViewCapsules";
import ViewOneCapsule from "./components/capsules/ViewOneCapsule";
import Index from './components/home/Index';
import ViewLaunches from "./components/launch/ViewLaunches";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="view-capsules" element={<ViewCapsules />} />
          <Route path="view-capsule/:id" element={<ViewOneCapsule />} />
          <Route path="view-launches" element={<ViewLaunches />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
