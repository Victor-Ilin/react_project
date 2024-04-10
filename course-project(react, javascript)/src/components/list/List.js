/* Victor Ilin. Id:326814043 */

/*********************************
 * *IMPORT LIBRARIES
 *********************************/
import React from "react";
import Button from "../button/Button";
import Person from "../person/Person";
import Search from "../search/Search";
import uuid from "react-uuid";
import "./list.css";

import { VscTrash } from "react-icons/vsc";
import { VscInfo } from "react-icons/vsc";
import { VscAdd } from "react-icons/vsc";
import { VscEdit } from "react-icons/vsc";

/*********************************
 * *COMPONENT
 *********************************/

class List extends React.Component {
  render() {
    const {
      title,
      clearFunction,
      arrSize,
      people,
      deleteItem,
      showInfo,
      handleSearch,
      toggleFormOpeningState,
      peekElement,
    } = this.props;

    const arr = people
      // Sort the people by their names
      .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))

      // Create the appropriate list from the sorted array
      .map((el) => (
        <div className="row" key={uuid()}>
          <div
            className="person-clickable-section"
            onClick={() => showInfo(el)}
          >
            <Person data={el} index={uuid()} />
          </div>
          <div className="buttons-operations">
            <VscInfo
              className="icon"
              onClick={() => showInfo(el)}
              style={{ width: "2.5rem" }}
            />

            <VscEdit
              className="icon"
              onClick={() => peekElement(el)}
              style={{ width: "2.5rem" }}
            />

            <VscTrash
              className="icon"
              onClick={() => deleteItem(el)}
              style={{ width: "2.5rem" }}
            />
          </div>
        </div>
      ));
    return (
      <section className="list">
        <div className="list-heading">
          <div className="list-title">
            <p>
              {arrSize}
              {title}
            </p>
          </div>
          <div className="add-button">
            <VscAdd
              onClick={toggleFormOpeningState}
              className="icon"
              style={{
                width: "2rem",
                fontSize: "2rem",
                margin: "1.5rem",
              }}
            />
          </div>
        </div>
        <Search handleSearch={handleSearch} />

        <div className="grid-list">{arr}</div>
        <Button title="Clear All" fun={clearFunction} />
      </section>
    );
  }
}

export default List;
