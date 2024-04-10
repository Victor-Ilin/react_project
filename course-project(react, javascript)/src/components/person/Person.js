/* Victor Ilin. Id:326814043 */

/*********************************
 * *IMPORT LIBRARIES
 *********************************/

import React from "react";
import "./person.css";

/*********************************
 * *COMPONENT
 *********************************/

class Person extends React.Component {
  render() {
    const { name, image } = this.props.data;
    return (
      <section className="person">
        <div className="details">
          <p style={{ fontWeight: "bold" }}>{name}</p>
        </div>
        <img src={image} alt="Random person" />
      </section>
    );
  }
}

export default Person;
