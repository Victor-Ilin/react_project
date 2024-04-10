/* Victor Ilin. Id:326814043 */

/*********************************
 * *IMPORT LIBRARIES
 *********************************/

import React from "react";
import "./popup.css"; /*}

/*********************************
 * *COMPONENT
 *********************************/

class PopUp extends React.Component {
  render() {
    const {
      toggleInfoState,
      name,
      phone,
      age,
      address,
      email,
      description,
      image,
    } = this.props;

    return (
      <section className="popup-box">
        <div className="box">
          <button className="btn-close" onClick={toggleInfoState}>
            x
          </button>

          <p>Name: {name}</p>
          <p>Phone: {phone}</p>
          <p>Age: {age}</p>
          <p>Address: {address}</p>
          <p>Email: {email}</p>
          <p>Description: {description}</p>
          <p>Image: {image}</p>
        </div>
      </section>
    );
  }
}

export default PopUp;
