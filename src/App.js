// import logo from './logo.svg';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import CardList from "./components/CardList";
import Card from "./components/Card";
import Bootstrap from "./components/Bootstrap";
import {  useState } from "react";
import { ThemeProvider } from '../src/contexts/ThemeContext.jsx';
import { QueContext } from "./contexts/QueryContext.jsx";

function App() {
  const [query, setQuery] = useState("");
  // const [mode, setMode] = useState(JSON.parse(localStorage.getItem("isDarkMode"))
  // );
  

  return (
    <QueContext.Provider value={[query,setQuery]}>
    <ThemeProvider>
      <Router>
        <Header  />
        <Search  />
        <Routes>
          <Route path="/" element={<CardList />}></Route>
          <Route path="/:card" element={<Card/>}></Route>
          <Route path="/bootstrap" element={<Bootstrap />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>  
    </QueContext.Provider>       

  );
}

export default App;
