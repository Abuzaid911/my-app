import React from 'react';
import { Route , Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";

function App() {

  return (
    <div className="App">
            <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/Blog" element={ <Blog/> } />
      </Routes>
    </div>
  );
}

export default App;
