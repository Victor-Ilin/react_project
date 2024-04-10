/* Victor Ilin. Id:326814043 */

/*********************************
 * *IMPORT LIBRARIES
 *********************************/
import React from "react";
import "./main.css";
import { data } from "./database";
import PopUp from "../popup/Popup";
import List from "../list/List";
import Form from "../form/Form";

/*********************************
 * *CREATE REACT COMPONENT
 *********************************/
class Main extends React.Component {
  state = {
    arrayData: data,
    infoState: "hide",
    showForm: false,
    currentInfoElement: {},
    searchWord: "",
  };

  // Method to clear all the persons in the list
  clearAllPersons = () => {
    this.setState({ arrayData: [] });
  };

  // Method which get person element and extract that person from the list
  showInfoUsingFilter = (el) => {
    // Extract the current element from the person array
    const currentElement = this.state.arrayData.filter((e) => e === el);

    // Change the info status, hide or show
    this.toggleInfoState();

    this.setState({
      currentInfoElement: currentElement[0],
    });
  };

  // Method to change the status of the display of the show info popup
  toggleInfoState = () => {
    this.setState({
      infoState: this.state.infoState === "hide" ? "show" : "hide",
    });
  };

  // Method get the person element and delete it from the person list
  deleteItemUsingFilter = (el) => {
    const newArray = this.state.arrayData.filter((e) => e !== el);

    this.setState({
      arrayData: newArray,
    });
  };

  // Method which determine which word to search
  handleSearch = (event) => {
    this.setState({
      searchWord: event.target.value,
    });
  };

  // Method to change to open the form
  toggleFormOpeningState = () => {
    // Sets the show form to it's appropriate status and reset the current element
    this.setState({
      showForm: true ? this.state.showForm === false : false,
      currentInfoElement: {},
    });
  };

  // Method to extract the chosen object from the people list
  findCurrentElement = (el) => {
    // Open the form
    this.toggleFormOpeningState();

    // Extract the current element from the person array
    const currentElement = this.state.arrayData.filter((e) => e === el);

    // Set the current selected person in the state
    this.setState({
      currentInfoElement: currentElement[0],
    });
  };

  // Method to check if the person exist in the list
  isPersonExists = (name) => {
    const newArray = this.state.arrayData.filter((el) => {
      return el.name.toLowerCase() === name.toLowerCase();
    });
    return newArray.length === 1;
  };

  render() {
    // We filter the result by the inserted word
    const searchQuery = this.state.searchWord;
    const showArr = this.state.arrayData.filter(function (el) {
      const searchValue = el.name.toLowerCase();

      // Search the inserted value in each person name
      return searchValue.indexOf(searchQuery) !== -1;
    });

    return (
      <main className="main">
        <List
          people={showArr}
          title={`${this.state.arrayData.length} people in the list`}
          clearFunction={this.clearAllPersons}
          arrSize={this.state.arrSize}
          deleteItem={this.deleteItemUsingFilter}
          showInfo={this.showInfoUsingFilter}
          toggleInfoState={this.toggleInfoState}
          toggleAddState={this.toggleAddState}
          handleSearch={this.handleSearch}
          toggleEditState={this.toggleEditState}
          toggleFormOpeningState={this.toggleFormOpeningState}
          peekElement={this.findCurrentElement}
        />

        {/* show info component */}
        {this.state.infoState === "show" ? (
          <PopUp
            toggleInfoState={this.toggleInfoState}
            name={this.state.currentInfoElement.name}
            phone={this.state.currentInfoElement.phone}
            age={this.state.currentInfoElement.age}
            address={this.state.currentInfoElement.address}
            email={this.state.currentInfoElement.email}
            description={this.state.currentInfoElement.description}
            image={this.state.currentInfoElement.image}
          />
        ) : null}

        {/* show form component */}
        {this.state.showForm ? (
          <Form
            toggleFormOpeningState={this.toggleFormOpeningState}
            arrayData={this.state.arrayData}
            currentPerson={this.state.currentInfoElement}
            findCurrentElement={this.findCurrentElement}
          />
        ) : null}
      </main>
    );
  }
}

export default Main;
