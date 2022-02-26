import React from "react";
import headerStyles from "../styles/Header.module.css";

function Header() {
 
    return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Webdev</span> News
      </h1>
     <p className={headerStyles.desription}>
         keep up to date with web dev news
     </p>
    </div>
  ); 
}

export default Header;
