import "./App.css";
import Data from "./data/flavors.csv";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Papa from "papaparse";
import NavMenu from "./components/NavMenu";
import Home from "./pages/Home";
import Flavors from "./pages/Flavors";
import Category from "./pages/Category";
import Design from "./pages/Design";
import Production from "./pages/Production";
import Certification from "./pages/Certification";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(Data);
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csvData = decoder.decode(result.value);
      const parsedData = Papa.parse(csvData, {
        header: false,
        skipEmptyLines: true,
      }).data;
      setData(parsedData);
    };
    (async () => await fetchData())();
  }, []);

  return (
    <Router>
      <div className="app">
        <NavMenu data={data} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/flavors" element={<Flavors data={data} />} />
          <Route path="/flavors/:id" element={<Category data={data} />} />
          <Route path="/design" element={<Design />} />
          <Route path="/production" element={<Production />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
