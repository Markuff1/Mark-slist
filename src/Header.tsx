import "./Header.css";
import {ListOfItems} from "./ListOfItems.tsx";
import BirthdayCountdown from './BirthdayCountdown.tsx';
import React from "react";


function Header() {
  return (
    <div className="HeaderBackground">
      <div className="HeaderContainer">
        <div className="HeaderText1">
          Mark's Birthday List
        </div>
        <div className="HeaderText2">
          <BirthdayCountdown/>
        </div>
        <div className="HeaderText3">
        </div>
      </div>
    </div>
    
  );
}

export default Header;