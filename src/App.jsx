import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import BootstrapBody from "../components/bootstrap";
import Nav1 from "../components/nav";
import Footer from "../components/footer";
import Agecounter from "../components/agecounter";
import useFetchDataAndTable from "../components/useFetchDataAndTable";
import ExploreMessi from "../pages/more";
import MessiStats from "../pages/MessiStats"; // Import MessiStats

export default function App(){

  const DataTable = useFetchDataAndTable(`http://127.0.0.1:5001/post`);
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <>
            <Nav1/>
            <Header/>
            <BootstrapBody/>
            <Agecounter/>
            <div className="data-container">
              <h2>Data from Flask Backend:</h2>
              {DataTable}
            </div>
            <Footer/>
          </>
        } />
        <Route path='/more' element={<ExploreMessi />} />
        <Route path='/messi-stats' element={<MessiStats />} /> {/* Add new route */}
      </Routes>
    </Router>
  )
}

