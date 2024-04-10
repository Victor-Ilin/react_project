/* Victor Ilin. Id:326814043 */

/*********************************
 * *IMPORT LIBRARIES
 *********************************/
import React from "react";
import "./header.css";

/*********************************
 * *COMPONENT
 *********************************/
function Header(props) {
  return (
    <header className="header">
      <h1>{props.title}</h1>
    </header>
  );
}

export default Header;
