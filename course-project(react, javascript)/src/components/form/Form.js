/* Victor Ilin. Id:326814043 */

/*********************************
 * *IMPORT LIBRARIES
 *********************************/
import React from "react";
import "./form.css";

/*********************************
 * *COMPONENT
 *********************************/

class Form extends React.Component {
  constructor(props) {
    super(props);

    // If the person object that been sent is empty, the state values will be empty
    // otherwise the values will be identical to the object fields
    this.state = {
      value: "",
      name:
        this.props.currentPerson == {} ? "" : this.props.currentPerson.name,
      age: this.props.currentPerson == {} ? "" : this.props.currentPerson.age,
      phone:
        this.props.currentPerson == {} ? "" : this.props.currentPerson.phone,
      address:
        this.props.currentPerson == {} ? "" : this.props.currentPerson.address,
      email:
        this.props.currentPerson == {} ? "" : this.props.currentPerson.email,
      description:
        this.props.currentPerson == {}
          ? ""
          : this.props.currentPerson.description,
      image:
        this.props.currentPerson == {} ? "" : this.props.currentPerson.image,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Method to update the input fields after every change
  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  // Method to check if the person exist in the list
  isPersonExists = (name) => {
    const newArray = this.props.arrayData.filter((el) => {
      return el.name.toLowerCase() === name.toLowerCase();
    });
    return newArray.length === 1;
  };

  // Method to handle the submit of the form
  handleSubmit(event) {
    event.preventDefault();

    // Add the person
    if (this.props.currentPerson.name === undefined) {
      // Retrieving the current people list
      const oldArray = this.props.arrayData;

      // Creating the new person object
      const newPerson = {
        name: this.state.name,
        age: this.state.age,
        phone: this.state.phone,
        image: this.state.image,
        address: this.state.address,
        email: this.state.email,
        description: this.state.description,
      };

      // Check if name and phone are valid and if the name does not already exist in the list
      if (
        newPerson.name.trim() !== "" &&
        newPerson.phone.trim() !== "" &&
        !this.isPersonExists(newPerson.name)
      ) {
        oldArray.push(newPerson);

        // Close the form
        this.props.toggleFormOpeningState();
      } else {
        window.alert("The person name already exists, please enter new name");
      }
    }

    // Update the person
    else {
      // Retrieving the current people ist
      const oldArray = this.props.arrayData;

      // Creating the new person object
      const newPerson = {
        name: this.state.name,
        age: this.state.age,
        phone: this.state.phone,
        image: this.state.image,
        address: this.state.address,
        email: this.state.email,
        description: this.state.description,
      };

      // Replace the element with the updated one
      const indexOfElement = oldArray.indexOf(this.props.currentPerson);
      if (indexOfElement !== -1) {
        oldArray[indexOfElement] = newPerson;
      }

      // Close the form
      this.props.toggleFormOpeningState();
    }
  }

  render() {
    const { toggleFormOpeningState } = this.props;
    return (
      <section className="popup-box">
        <div className="box">
          <button className="btn-close" onClick={toggleFormOpeningState}>
            x
          </button>
          <form onSubmit={this.handleSubmit}>
            <div className="input-container">
              Full Name:
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                name="name"
                required
              />
            </div>

            <div className="input-container">
              Phone:
              <input
                type="tel"
                value={this.state.phone}
                onChange={this.handleChange}
                name="phone"
                required
              />
            </div>

            <div className="input-container">
              Age:
              <input
                type="text"
                value={this.state.age}
                onChange={this.handleChange}
                name="age"
              />
            </div>

            <div className="input-container">
              Image URL:
              <input
                type="text"
                value={this.state.image}
                onChange={this.handleChange}
                name="image"
              />
            </div>

            <div className="input-container">
              Address:
              <input
                type="text"
                value={this.state.address}
                onChange={this.handleChange}
                name="address"
              />
            </div>

            <div className="input-container">
              Email:
              <input
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
              />
            </div>

            <div className="input-container">
              Description:
              <textarea
                value={this.state.description}
                onChange={this.handleChange}
                name="description"
                cols={"30"}
                rows={"5"}
              />
            </div>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </section>
    );
  }
}

export default Form;
