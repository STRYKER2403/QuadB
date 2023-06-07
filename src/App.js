// import logo from './logo.svg';
// import { useEffect, useState } from 'react';
import './App.css';
import Content from './components/Content';
import Book from './components/Book';
import ContentDesc from './components/ContentDesc';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {


  return (
    <Router>
      <div>

        <Navbar />
        <Routes>
          <Route exact path="/" element={<Content />} />
          <Route path="/:movieId/Book" element={<Book />} />
          <Route path="/:movieId" element={<ContentDesc />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
