/* Victor Ilin. Id:326814043 */

/*********************************
 * *IMPORT LIBRARIES
 *********************************/
import React from "react";
import "./footer.css";

/*********************************
 * *COMPONENT
 *********************************/
function Footer(props) {
  return (
    <footer className="footer">
      &copy; {props.year} {props.text}
    </footer>
  );
}

export default Footer;
