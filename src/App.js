import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter"
import Input from "./pages/Input"
import Input2 from "./pages/Input2"
import List from "./pages/List"
import React from "react";
import {Routes,Route,Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/About">About</Link> |
        <Link to="/Counter">Counter</Link> |
        <Link to="/Input">Input</Link> |
        <Link to="/Input2">Input2</Link> |
        <Link to="/List">List</Link> 
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Counter" element={<Counter/>}></Route>
        <Route path="/Input" element={<Input/>}></Route>
        <Route path="/Input2" element={<Input2/>}></Route>
        <Route path="/List" element={<List/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
