import "./Header.css";
import {ListOfItems} from "./ListOfItems.tsx";
import ChristmasCountdown from './ChristmasCountdown.tsx';
import React from "react";


function Header() {
  return (
    <div className="HeaderBackground">
      <div className="HeaderText">
        Mark's Birthday List
      </div>
      <div className="HeaderText">
        <ChristmasCountdown/>
      </div>
    </div>
  );
}

export default Header;