/* Victor Ilin. Id:326814043 */

/*********************************
 * *IMPORT LIBRARIES
 *********************************/
import React from "react";
import "./search.css";

/*********************************
 * *COMPONENT
 *********************************/

class Search extends React.Component {
  render() {
    const { handleSearch } = this.props;
    return (
      <div>
        <input
          type="text"
          className="search"
          placeholder="Search"
          onChange={handleSearch}
        />
      </div>
    );
  }
}

export default Search;
