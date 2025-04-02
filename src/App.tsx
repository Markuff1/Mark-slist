import "./Home.css";
import {ListOfItems} from "./ListOfItems.tsx";
import ChristmasCountdown from './ChristmasCountdown.tsx';
import Home from './Home.tsx';
import Header from './Header.tsx';
import Footer from './Footer.tsx';
import React from "react";


function App() {
  return (
    <div className="HomeBackground">
      <Header/>
        <Home/>
      <Footer/>
    </div>
  );
}

export default App;