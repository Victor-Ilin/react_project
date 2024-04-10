/* Victor Ilin. Id:326814043 */

/*********************************
 * *IMPORT LIBRARIES
 *********************************/

import React from "react";
import "./button.css";

/*********************************
 * *COMPONENT
 *********************************/
class Button extends React.Component {
  render() {
    const { title, fun } = this.props;
    return (
      <button className="button" onClick={fun}>
        {title}
      </button>
    );
  }
}

export default Button;
